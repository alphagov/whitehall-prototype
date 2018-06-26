class ColumnGroupings {
  constructor () {
    this._groupings = {
      'all': [
				'title',
				'updated_at',
				'pageviews',
				'unique_pageviews',
				'timeline_of_unique_pageviews',
				'pageviews_per_person',
				'is_this_useful_yes',
				'is_this_useful_no',
				'user_satisfaction_score',
				'number_of_internal_searches',
				'feedex_comments',
				'number_of_pdfs',
				'number_of_word_files',
				'readability_score'
      ],
      'quality': [
        'title',
        'pageviews',
        'unique_pageviews',
        'timeline_of_unique_pageviews',
        'pageviews_per_person',
        'readability_score'
      ],
      'performance': [
        'title',
        'updated_at',
        'pageviews',
        'unique_pageviews',
        'timeline_of_unique_pageviews',
        'pageviews_per_person',
        'is_this_useful_yes',
        'is_this_useful_no',
        'user_satisfaction_score',
        'number_of_internal_searches',
        'feedex_comments'
      ],
      'accessibility': [
        'title',
        'pageviews',
        'unique_pageviews',
        'timeline_of_unique_pageviews',
        'pageviews_per_person',
        'number_of_pdfs',
        'number_of_word_files'
      ]
    };
  }

  get groupingNames () {
    return Object.keys(this._groupings);
  }

  getColumnKeysForGroup (group) {
    return this._groupings[group];
  }
}

module.exports = new ColumnGroupings;
