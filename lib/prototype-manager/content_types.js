class ContentTypes {
  constructor () {}

  get _mapping () {
    return [
			{ superGroup: "guidance_and_regulation", documentType: "answer" },
			{ superGroup: "guidance_and_regulation", documentType: "business_finance_support_scheme" },
			{ superGroup: "guidance_and_regulation", documentType: "calendar" },
			{ superGroup: "guidance_and_regulation", documentType: "contact" },
			{ superGroup: "guidance_and_regulation", documentType: "countryside_stewardship_grant" },
			{ superGroup: "guidance_and_regulation", documentType: "detailed_guide" },
			{ superGroup: "guidance_and_regulation", documentType: "esi_fund" },
			{ superGroup: "guidance_and_regulation", documentType: "guidance" },
			{ superGroup: "guidance_and_regulation", documentType: "guide" },
			{ superGroup: "guidance_and_regulation", documentType: "international_development_fund" },
			{ superGroup: "guidance_and_regulation", documentType: "manual" },
			{ superGroup: "guidance_and_regulation", documentType: "manual_section" },
			{ superGroup: "guidance_and_regulation", documentType: "regulation" },
			{ superGroup: "guidance_and_regulation", documentType: "statutory_guidance" },
			{ superGroup: "guidance_and_regulation", documentType: "travel_advice" },
			{ superGroup: "news_and_communications", documentType: "authored_article" },
			{ superGroup: "news_and_communications", documentType: "correspondence" },
			{ superGroup: "news_and_communications", documentType: "drug_safety_update" },
			{ superGroup: "news_and_communications", documentType: "fatality_notice" },
			{ superGroup: "news_and_communications", documentType: "government_response" },
			{ superGroup: "news_and_communications", documentType: "medical_safety_alert" },
			{ superGroup: "news_and_communications", documentType: "news_article" },
			{ superGroup: "news_and_communications", documentType: "news_story" },
			{ superGroup: "news_and_communications", documentType: "notice" },
			{ superGroup: "news_and_communications", documentType: "oral_statement" },
			{ superGroup: "news_and_communications", documentType: "press_release" },
			{ superGroup: "news_and_communications", documentType: "speech" },
			{ superGroup: "news_and_communications", documentType: "world_location_news_article" },
			{ superGroup: "news_and_communications", documentType: "world_news_story" },
			{ superGroup: "news_and_communications", documentType: "written_statement" },
			{ superGroup: "policy_and_engagement", documentType: "case_study" },
			{ superGroup: "policy_and_engagement", documentType: "closed_consultation" },
			{ superGroup: "policy_and_engagement", documentType: "consultation_outcome" },
			{ superGroup: "policy_and_engagement", documentType: "impact_assessment" },
			{ superGroup: "policy_and_engagement", documentType: "independent_report" },
			{ superGroup: "policy_and_engagement", documentType: "open_consultation" },
			{ superGroup: "policy_and_engagement", documentType: "policy_paper" },
			{ superGroup: "services", documentType: "calculator" },
			{ superGroup: "services", documentType: "completed_transaction" },
			{ superGroup: "services", documentType: "form" },
			{ superGroup: "services", documentType: "licence" },
			{ superGroup: "services", documentType: "local_transaction" },
			{ superGroup: "services", documentType: "place" },
			{ superGroup: "services", documentType: "simple_smart_answer" },
			{ superGroup: "services", documentType: "smart_answer" },
			{ superGroup: "services", documentType: "step_by_step_nav" },
			{ superGroup: "services", documentType: "transaction" },
			{ superGroup: "transparency", documentType: "aaib_report" },
			{ superGroup: "transparency", documentType: "asylum_support_decision" },
			{ superGroup: "transparency", documentType: "cma_case" },
			{ superGroup: "transparency", documentType: "decision" },
			{ superGroup: "transparency", documentType: "dfid_research_output" },
			{ superGroup: "transparency", documentType: "employment_appeal_tribunal_decision" },
			{ superGroup: "transparency", documentType: "employment_tribunal_decision" },
			{ superGroup: "transparency", documentType: "foi_release" },
			{ superGroup: "transparency", documentType: "international_treaty" },
			{ superGroup: "transparency", documentType: "maib_report" },
			{ superGroup: "transparency", documentType: "map" },
			{ superGroup: "transparency", documentType: "national_statistics" },
			{ superGroup: "transparency", documentType: "national_statistics_announcement" },
			{ superGroup: "transparency", documentType: "official_statistics" },
			{ superGroup: "transparency", documentType: "official_statistics_announcement" },
			{ superGroup: "transparency", documentType: "raib_report" },
			{ superGroup: "transparency", documentType: "research" },
			{ superGroup: "transparency", documentType: "service_standard_report" },
			{ superGroup: "transparency", documentType: "statistical_data_set" },
			{ superGroup: "transparency", documentType: "statistics" },
			{ superGroup: "transparency", documentType: "statistics_announcement" },
			{ superGroup: "transparency", documentType: "tax_tribunal_decision" },
			{ superGroup: "transparency", documentType: "transparency" },
			{ superGroup: "transparency", documentType: "utaac_decision " }
    ];
  }

  get superGroups () {
  	return this._mapping.map(entry => entry.superGroup);
  }

  get documentTypes () {
  	return this._mapping.map(entry => entry.documentType);
  }

	asBreadcrumbs () {
		const results = [];

		// add super groups
		this._mapping.forEach(entry => {
      const str = this._capitalise(entry.superGroup);

			if (!results.includes(str)) {
				results.push(str);
			}
		});

		// add document types
		this._mapping.forEach(entry => {
			results.push(`${this._capitalise(entry.superGroup)} > ${this._capitalise(entry.documentType)}`);
		});

		return results;
	}

  getContentTypeFromBreadcrumb (breadcrumb) {
    const parts = breadcrumb.toLowerCase().split(' > ');

    return {
      'superGroup': parts[0],
      'documentType': parts[1]
    };
  }

	_capitalise (str) {
		return str[0].toUpperCase() + str.slice(1);
	}
};

module.exports = new ContentTypes;
