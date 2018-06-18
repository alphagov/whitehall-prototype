const args = require('minimist')(process.argv.slice(2));
const organisations = require('./organisations');

const stdin = process.stdin;
const stdout = process.stdout;
const inputChunks = [];

stdin.resume();
stdin.setEncoding('utf8');

stdin.on('data', function (chunk) {
	inputChunks.push(chunk);
});

stdin.on('end', function () {
	const inputJSON = inputChunks.join('');
	const parsedData = JSON.parse(inputJSON);

	const basePaths = Object.keys(parsedData).map(key => `'${key}'`);
  let orgSql = '';

  if ('o' in args) {
    orgSql = `AND primary_organisation_title = ${organisations.getOrgForAcronym(args.o)} `;
  }

	const sql = `
		SELECT facts_metrics.dimensions_date_id AS collection_date, content_id, title, base_path, document_type, content_purpose_supergroup, primary_organisation_title, facts_metrics.created_at, facts_metrics.updated_at, pageviews, unique_pageviews, number_of_internal_searches, is_this_useful_yes, is_this_useful_no, feedex_comments, number_of_pdfs, number_of_word_files, readability_score, spell_count, simplify_count, passive_count, word_count, sentence_count FROM facts_metrics INNER JOIN dimensions_items ON facts_metrics.dimensions_item_id=dimensions_items.id WHERE facts_metrics.dimensions_date_id > '2018-04-02' AND title IS NOT NULL AND base_path IS NOT NULL AND document_type IS NOT NULL AND content_purpose_supergroup IS NOT NULL AND primary_organisation_title IS NOT NULL AND facts_metrics.created_at IS NOT NULL AND facts_metrics.updated_at IS NOT NULL AND pageviews IS NOT NULL AND unique_pageviews IS NOT NULL AND number_of_internal_searches IS NOT NULL AND is_this_useful_yes IS NOT NULL AND is_this_useful_no IS NOT NULL AND feedex_comments IS NOT NULL AND number_of_pdfs IS NOT NULL AND number_of_word_files IS NOT NULL AND readability_score IS NOT NULL AND spell_count IS NOT NULL AND simplify_count IS NOT NULL AND passive_count IS NOT NULL AND word_count IS NOT NULL AND sentence_count IS NOT NULL ${orgSql}AND base_path in (${basePaths}) ORDER BY collection_date DESC, content_id DESC LIMIT 10000;
`;
	stdout.write(sql);
	stdout.write('\n');
});
