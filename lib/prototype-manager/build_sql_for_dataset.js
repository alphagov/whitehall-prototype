const orgMapping = require('org_mapping');

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
    orgSql = `AND primary_organisation_title = ${orgMapping[args.o]} `;
  }

	const sql = `
		SELECT facts_metrics.dimensions_date_id AS collection_date, content_id, title, base_path, document_type, primary_organisation_title, first_published_at, public_updated_at, pageviews, unique_pageviews, number_of_internal_searches, is_this_useful_yes, is_this_useful_no, feedex_comments, number_of_pdfs, number_of_word_files, readability_score, spell_count, simplify_count, passive_count, word_count, sentence_count FROM facts_metrics INNER JOIN dimensions_items ON facts_metrics.dimensions_item_id=dimensions_items.id WHERE facts_metrics.dimensions_date_id > '2018-05-14' ${orgSql}AND base_path in (${basePaths}) ORDER BY collection_date DESC LIMIT 10000;
`;
	stdout.write(sql);
	stdout.write('\n');
});
