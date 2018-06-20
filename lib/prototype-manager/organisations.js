class Organisations {
  constructor () {
    this._mapping = [
			{
				"title": "Prime Minister's Office, 10 Downing Street",
				"slug": "prime-ministers-office-10-downing-street",
				"acronym": "Number 10"
			},
			{
				"title": "Attorney General's Office",
				"slug": "attorney-generals-office",
				"acronym": "AGO"
			},
			{
				"title": "Cabinet Office",
				"slug": "cabinet-office",
				"acronym": ""
			},
			{
				"title": "Department for Business, Energy & Industrial Strategy",
				"slug": "department-for-business-energy-and-industrial-strategy",
				"acronym": "BEIS"
			},
			{
				"title": "Department for Digital, Culture, Media & Sport",
				"slug": "department-for-digital-culture-media-sport",
				"acronym": "DCMS"
			},
			{
				"title": "Department for Education",
				"slug": "department-for-education",
				"acronym": "DfE"
			},
			{
				"title": "Department for Environment, Food & Rural Affairs",
				"slug": "department-for-environment-food-rural-affairs",
				"acronym": "Defra"
			},
			{
				"title": "Department for Exiting the European Union",
				"slug": "department-for-exiting-the-european-union",
				"acronym": "DExEU"
			},
			{
				"title": "Department for International Development",
				"slug": "department-for-international-development",
				"acronym": "DFID"
			},
			{
				"title": "Department for International Trade",
				"slug": "department-for-international-trade",
				"acronym": "DIT"
			},
			{
				"title": "Department for Transport",
				"slug": "department-for-transport",
				"acronym": "DfT"
			},
			{
				"title": "Department for Work and Pensions",
				"slug": "department-for-work-pensions",
				"acronym": "DWP"
			},
			{
				"title": "Department of Health and Social Care",
				"slug": "department-of-health-and-social-care",
				"acronym": "DHSC"
			},
			{
				"title": "Foreign & Commonwealth Office",
				"slug": "foreign-commonwealth-office",
				"acronym": "FCO"
			},
			{
				"title": "HM Treasury",
				"slug": "hm-treasury",
				"acronym": "HMT"
			},
			{
				"title": "Home Office",
				"slug": "home-office",
				"acronym": "Home Office"
			},
			{
				"title": "Ministry of Defence",
				"slug": "ministry-of-defence",
				"acronym": "MOD"
			},
			{
				"title": "Ministry of Housing, Communities & Local Government",
				"slug": "ministry-of-housing-communities-and-local-government",
				"acronym": "MHCLG"
			},
			{
				"title": "Ministry of Justice",
				"slug": "ministry-of-justice",
				"acronym": "MOJ"
			},
			{
				"title": "Northern Ireland Office",
				"slug": "northern-ireland-office",
				"acronym": "NIO"
			},
			{
				"title": "Office of the Advocate General for Scotland",
				"slug": "office-of-the-advocate-general-for-scotland",
				"acronym": "OAG"
			},
			{
				"title": "Office of the Leader of the House of Commons",
				"slug": "the-office-of-the-leader-of-the-house-of-commons",
				"acronym": "OLHC"
			},
			{
				"title": "Office of the Leader of the House of Lords",
				"slug": "office-of-the-leader-of-the-house-of-lords",
				"acronym": "OLHL"
			},
			{
				"title": "Office of the Secretary of State for Scotland",
				"slug": "office-of-the-secretary-of-state-for-scotland",
				"acronym": ""
			},
			{
				"title": "Office of the Secretary of State for Wales",
				"slug": "office-of-the-secretary-of-state-for-wales",
				"acronym": "WO"
			},
			{
				"title": "UK Export Finance",
				"slug": "uk-export-finance",
				"acronym": "UKEF"
			},
			{
				"title": "The Charity Commission",
				"slug": "charity-commission",
				"acronym": "Charity Commission"
			},
			{
				"title": "Competition and Markets Authority",
				"slug": "competition-and-markets-authority",
				"acronym": "CMA"
			},
			{
				"title": "Crown Prosecution Service",
				"slug": "crown-prosecution-service",
				"acronym": "CPS"
			},
			{
				"title": "Food Standards Agency",
				"slug": "food-standards-agency",
				"acronym": "FSA"
			},
			{
				"title": "Forestry Commission",
				"slug": "forestry-commission",
				"acronym": "Forestry Commission"
			},
			{
				"title": "Government Actuary's Department",
				"slug": "government-actuarys-department",
				"acronym": "GAD"
			},
			{
				"title": "Government Legal Department",
				"slug": "government-legal-department",
				"acronym": "GLD"
			},
			{
				"title": "HM Land Registry",
				"slug": "land-registry",
				"acronym": "HM Land Registry"
			},
			{
				"title": "HM Revenue & Customs",
				"slug": "hm-revenue-customs",
				"acronym": "HMRC"
			},
			{
				"title": "NS&I",
				"slug": "ns-i",
				"acronym": "NS&I"
			},
			{
				"title": "The National Archives",
				"slug": "the-national-archives",
				"acronym": ""
			},
			{
				"title": "National Crime Agency",
				"slug": "national-crime-agency",
				"acronym": "NCA"
			},
			{
				"title": "Office of Rail and Road",
				"slug": "office-of-rail-and-road",
				"acronym": "ORR"
			},
			{
				"title": "Ofgem",
				"slug": "ofgem",
				"acronym": ""
			},
			{
				"title": "Ofqual",
				"slug": "ofqual",
				"acronym": "Ofqual"
			},
			{
				"title": "Ofsted",
				"slug": "ofsted",
				"acronym": "Ofsted"
			},
			{
				"title": "Serious Fraud Office",
				"slug": "serious-fraud-office",
				"acronym": "SFO"
			},
			{
				"title": "Supreme Court of the United Kingdom",
				"slug": "supreme-court-of-the-united-kingdom",
				"acronym": "SCUK"
			},
			{
				"title": "UK Statistics Authority",
				"slug": "uk-statistics-authority",
				"acronym": "Statistics"
			},
			{
				"title": "The Water Services Regulation Authority ",
				"slug": "the-water-services-regulation-authority",
				"acronym": "Ofwat"
			},
			{
				"title": "Academy for Social Justice Commissioning",
				"slug": "academy-for-social-justice-commissioning",
				"acronym": ""
			},
			{
				"title": "Accelerated Access Review",
				"slug": "accelerated-access-review",
				"acronym": "AAR"
			},
			{
				"title": "The Adjudicator’s Office",
				"slug": "the-adjudicator-s-office",
				"acronym": ""
			},
			{
				"title": "Administration of Radioactive Substances Advisory Committee",
				"slug": "administration-of-radioactive-substances-advisory-committee",
				"acronym": "ARSAC"
			},
			{
				"title": "Advisory Committee on Animal Feedingstuffs",
				"slug": "advisory-committee-on-animal-feedingstuffs",
				"acronym": "ACAF"
			},
			{
				"title": "Advisory Committee on Business Appointments",
				"slug": "advisory-committee-on-business-appointments",
				"acronym": "ACOBA"
			},
			{
				"title": "Advisory Committee on Clinical Excellence Awards",
				"slug": "advisory-committee-on-clinical-excellence-awards",
				"acronym": "ACCEA"
			},
			{
				"title": "Advisory Committee on Conscientious Objectors",
				"slug": "advisory-committee-on-conscientious-objectors",
				"acronym": "ACCO"
			},
			{
				"title": "Advisory Committee on Novel Foods and Processes",
				"slug": "advisory-committee-on-novel-foods-and-processes",
				"acronym": "ACNFP"
			},
			{
				"title": "Advisory Committee on Releases to the Environment",
				"slug": "advisory-committee-on-releases-to-the-environment",
				"acronym": "ACRE"
			},
			{
				"title": "Advisory Committee on the Microbiological Safety of Food",
				"slug": "advisory-committee-on-the-microbiological-safety-of-food",
				"acronym": "ACMSF"
			},
			{
				"title": "Advisory Committees on Justices of the Peace",
				"slug": "advisory-committees-on-justices-of-the-peace",
				"acronym": "ACJP"
			},
			{
				"title": "The Advisory Council on National Records and Archives",
				"slug": "the-advisory-council-on-national-records-and-archives",
				"acronym": "ACNRA"
			},
			{
				"title": "Advisory Council on the Misuse of Drugs",
				"slug": "advisory-council-on-the-misuse-of-drugs",
				"acronym": "ACMD"
			},
			{
				"title": "Advisory Group on Military Medicine",
				"slug": "advisory-group-on-military-medicine",
				"acronym": "AGoMM"
			},
			{
				"title": "Advisory, Conciliation and Arbitration Service",
				"slug": "acas",
				"acronym": "Acas"
			},
			{
				"title": "Agriculture and Horticulture Development Board",
				"slug": "agriculture-and-horticulture-development-board",
				"acronym": "AHDB"
			},
			{
				"title": "Air Accidents Investigation Branch",
				"slug": "air-accidents-investigation-branch",
				"acronym": "AAIB"
			},
			{
				"title": "Animal and Plant Health Agency",
				"slug": "animal-and-plant-health-agency",
				"acronym": "APHA"
			},
			{
				"title": "Animals in Science Committee",
				"slug": "animals-in-science-committee",
				"acronym": "ASC"
			},
			{
				"title": "Armed Forces' Pay Review Body",
				"slug": "armed-forces-pay-review-body",
				"acronym": "AFPRB"
			},
			{
				"title": "Arts Council England",
				"slug": "arts-council-england",
				"acronym": ""
			},
			{
				"title": "Arts Council of Wales",
				"slug": "arts-council-of-wales",
				"acronym": ""
			},
			{
				"title": "Arts and Humanities Research Council",
				"slug": "arts-and-humanities-research-council",
				"acronym": "AHRC"
			},
			{
				"title": "BPDTS Ltd",
				"slug": "bpdts-ltd",
				"acronym": ""
			},
			{
				"title": "Bank of England",
				"slug": "bank-of-england",
				"acronym": ""
			},
			{
				"title": "Big Lottery Fund",
				"slug": "big-lottery-fund",
				"acronym": "BIG"
			},
			{
				"title": "Biometrics Commissioner",
				"slug": "biometrics-commissioner",
				"acronym": ""
			},
			{
				"title": "Biometrics and Forensics Ethics Group",
				"slug": "biometrics-and-forensics-ethics-group",
				"acronym": ""
			},
			{
				"title": "Biotechnology and Biological Sciences Research Council",
				"slug": "biotechnology-biological-sciences-research-council",
				"acronym": "BBSRC"
			},
			{
				"title": "Board of Trustees of the Royal Botanic Gardens Kew",
				"slug": "board-of-trustees-of-the-royal-botanic-gardens-kew",
				"acronym": ""
			},
			{
				"title": "Boundary Commission for England",
				"slug": "boundary-commission-for-england",
				"acronym": "BCE"
			},
			{
				"title": "Boundary Commission for Northern Ireland",
				"slug": "boundary-commission-for-northern-ireland",
				"acronym": "BCNI"
			},
			{
				"title": "Boundary Commission for Scotland",
				"slug": "boundary-commission-for-scotland",
				"acronym": "BCS"
			},
			{
				"title": "Boundary Commission for Wales",
				"slug": "boundary-commission-for-wales",
				"acronym": "BCW"
			},
			{
				"title": "British Business Bank",
				"slug": "british-business-bank",
				"acronym": "BBB"
			},
			{
				"title": "British Council",
				"slug": "british-council",
				"acronym": "British Council"
			},
			{
				"title": "British Film Institute",
				"slug": "british-film-institute",
				"acronym": "BFI"
			},
			{
				"title": "British Hallmarking Council",
				"slug": "british-hallmarking-council",
				"acronym": "BHC"
			},
			{
				"title": "British Library",
				"slug": "british-library",
				"acronym": "BL"
			},
			{
				"title": "British Museum",
				"slug": "british-museum",
				"acronym": "BM"
			},
			{
				"title": "British Pharmacopoeia Commission",
				"slug": "british-pharmacopoeia",
				"acronym": ""
			},
			{
				"title": "British Transport Police Authority",
				"slug": "british-transport-police-authority",
				"acronym": "BTPA"
			},
			{
				"title": "Broads Authority",
				"slug": "broads-authority",
				"acronym": ""
			},
			{
				"title": "Building Regulations Advisory Committee",
				"slug": "building-regulations-advisory-committee",
				"acronym": "BRAC"
			},
			{
				"title": "Cafcass",
				"slug": "children-and-family-court-advisory-and-support-service",
				"acronym": "Cafcass"
			},
			{
				"title": "Care Quality Commission",
				"slug": "care-quality-commission",
				"acronym": "CQC"
			},
			{
				"title": "Careers Wales",
				"slug": "careers-wales",
				"acronym": ""
			},
			{
				"title": "Central Advisory Committee on Compensation",
				"slug": "central-advisory-committee-on-compensation",
				"acronym": "CAC Compensation"
			},
			{
				"title": "Central Arbitration Committee",
				"slug": "central-arbitration-committee",
				"acronym": "CAC"
			},
			{
				"title": "Centre for Environment, Fisheries and Aquaculture Science",
				"slug": "centre-for-environment-fisheries-and-aquaculture-science",
				"acronym": "Cefas"
			},
			{
				"title": "Centre for the Protection of National Infrastructure",
				"slug": "centre-for-the-protection-of-national-infrastructure",
				"acronym": "CPNI"
			},
			{
				"title": "Certification Officer",
				"slug": "certification-officer",
				"acronym": "Certification Officer"
			},
			{
				"title": "Chevening Scholarship Programme ",
				"slug": "chevening-foundation",
				"acronym": "Chevening"
			},
			{
				"title": "Civil Justice Council",
				"slug": "civil-justice-council",
				"acronym": "CJC"
			},
			{
				"title": "Civil Nuclear Police Authority",
				"slug": "civil-nuclear-police-authority",
				"acronym": "CNPA"
			},
			{
				"title": "Civil Procedure Rule Committee",
				"slug": "civil-procedure-rules-committee",
				"acronym": "CPRC"
			},
			{
				"title": "Civil Service Commission",
				"slug": "civil-service-commission",
				"acronym": "CSC"
			},
			{
				"title": "Coal Authority",
				"slug": "the-coal-authority",
				"acronym": ""
			},
			{
				"title": "College of Policing",
				"slug": "college-of-policing",
				"acronym": ""
			},
			{
				"title": "Commission for Countering Extremism",
				"slug": "commission-for-countering-extremism",
				"acronym": ""
			},
			{
				"title": "Commission on Human Medicines",
				"slug": "commission-on-human-medicines",
				"acronym": "CHM"
			},
			{
				"title": "Commissioner for Public Appointments",
				"slug": "commissioner-for-public-appointments",
				"acronym": ""
			},
			{
				"title": "Committee on Climate Change",
				"slug": "committee-on-climate-change",
				"acronym": "CCC"
			},
			{
				"title": "Committee on Fuel Poverty",
				"slug": "committee-on-fuel-poverty",
				"acronym": "CFP"
			},
			{
				"title": "Committee on Mutagenicity of Chemicals in Food, Consumer Products and the Environment",
				"slug": "committee-on-mutagenicity-of-chemicals-in-food-consumer-products-and-the-environment",
				"acronym": "COM"
			},
			{
				"title": "Committee on Radioactive Waste Management",
				"slug": "committee-on-radioactive-waste-management",
				"acronym": "CoRWM"
			},
			{
				"title": "Committee on Standards in Public Life",
				"slug": "the-committee-on-standards-in-public-life",
				"acronym": "CSPL"
			},
			{
				"title": "Committee on Toxicity of Chemicals in Food, Consumer Products and the Environment",
				"slug": "committee-on-toxicity-of-chemicals-in-food-consumer-products-and-the-environment",
				"acronym": "COT"
			},
			{
				"title": "Commonwealth Scholarship Commission in the UK",
				"slug": "commonwealth-scholarship-commission-in-the-uk",
				"acronym": "CSC"
			},
			{
				"title": "Companies House ",
				"slug": "companies-house",
				"acronym": "Companies House"
			},
			{
				"title": "Company Names Tribunal",
				"slug": "company-names-tribunal",
				"acronym": ""
			},
			{
				"title": "Competition Appeal Tribunal",
				"slug": "competition-appeal-tribunal",
				"acronym": "CAT"
			},
			{
				"title": "Competition Service",
				"slug": "competition-service",
				"acronym": "CS"
			},
			{
				"title": "Construction Industry Training Board",
				"slug": "construction-industry-training-board",
				"acronym": "CITB"
			},
			{
				"title": "Consumer Council for Water",
				"slug": "consumer-council-for-water",
				"acronym": "CCWater"
			},
			{
				"title": "Copyright Tribunal",
				"slug": "copyright-tribunal",
				"acronym": ""
			},
			{
				"title": "Council for Science and Technology",
				"slug": "council-for-science-and-technology",
				"acronym": "CST"
			},
			{
				"title": "Covent Garden Market Authority",
				"slug": "covent-garden-market-authority",
				"acronym": "CGMA"
			},
			{
				"title": "Criminal Cases Review Commission",
				"slug": "criminal-cases-review-commission",
				"acronym": "CCRC"
			},
			{
				"title": "Criminal Injuries Compensation Authority",
				"slug": "criminal-injuries-compensation-authority",
				"acronym": "CICA"
			},
			{
				"title": "Criminal Procedure Rule Committee",
				"slug": "criminal-procedure-rule-committee",
				"acronym": ""
			},
			{
				"title": "Crown Commercial Service",
				"slug": "crown-commercial-service",
				"acronym": "CCS"
			},
			{
				"title": "The Crown Estate",
				"slug": "the-crown-estate",
				"acronym": ""
			},
			{
				"title": "Dartmoor National Park Authority",
				"slug": "dartmoor-national-park-authority",
				"acronym": "DNPA"
			},
			{
				"title": "Defence Academy of the United Kingdom",
				"slug": "defence-academy",
				"acronym": "DA"
			},
			{
				"title": "Defence Electronics and Components Agency",
				"slug": "defence-electronics-and-components-agency",
				"acronym": "DECA"
			},
			{
				"title": "Defence Nuclear Safety Committee",
				"slug": "defence-nuclear-safety-committee",
				"acronym": "DNSC"
			},
			{
				"title": "Defence Science and Technology Laboratory",
				"slug": "defence-science-and-technology-laboratory",
				"acronym": "Dstl"
			},
			{
				"title": "Defence Sixth Form College",
				"slug": "defence-sixth-form-college",
				"acronym": "DSFC"
			},
			{
				"title": "Defence and Security Media Advisory Committee",
				"slug": "defence-and-security-media-advisory-committee",
				"acronym": "DSMA"
			},
			{
				"title": "Department for Communities (Northern Ireland)",
				"slug": "department-for-communities-northern-ireland",
				"acronym": ""
			},
			{
				"title": "Department for Infrastructure (Northern Ireland)",
				"slug": "department-for-infrastructure-northern-ireland",
				"acronym": ""
			},
			{
				"title": "Department for the Economy (Northern Ireland)",
				"slug": "department-for-the-economy-northern-ireland",
				"acronym": ""
			},
			{
				"title": "Department of Agriculture, Environment and Rural Affairs (Northern Ireland)",
				"slug": "department-of-agriculture-environment-and-rural-affairs-northern-ireland",
				"acronym": ""
			},
			{
				"title": "Department of Education (Northern Ireland)",
				"slug": "department-of-education",
				"acronym": ""
			},
			{
				"title": "Department of Finance (Northern Ireland)",
				"slug": "department-of-finance-northern-ireland",
				"acronym": ""
			},
			{
				"title": "Department of Health (Northern Ireland)",
				"slug": "department-of-health-northern-ireland",
				"acronym": ""
			},
			{
				"title": "Department of Justice (Northern Ireland)",
				"slug": "department-of-justice-northern-ireland",
				"acronym": ""
			},
			{
				"title": "Directly Operated Railways Limited",
				"slug": "directly-operated-railways-limited",
				"acronym": "DOR"
			},
			{
				"title": "Disabled People’s Employment Corporation",
				"slug": "disabled-peoples-employment-corporation",
				"acronym": "DPEC"
			},
			{
				"title": "Disabled Persons Transport Advisory Committee",
				"slug": "disabled-persons-transport-advisory-committee",
				"acronym": "DPTAC"
			},
			{
				"title": "Disclosure and Barring Service",
				"slug": "disclosure-and-barring-service",
				"acronym": "DBS"
			},
			{
				"title": "Dounreay Site Restoration Ltd",
				"slug": "dounreay",
				"acronym": ""
			},
			{
				"title": "Drinking Water Inspectorate",
				"slug": "drinking-water-inspectorate",
				"acronym": "DWI"
			},
			{
				"title": "Driver and Vehicle Licensing Agency",
				"slug": "driver-and-vehicle-licensing-agency",
				"acronym": "DVLA"
			},
			{
				"title": "Driver and Vehicle Standards Agency",
				"slug": "driver-and-vehicle-standards-agency",
				"acronym": "DVSA"
			},
			{
				"title": "East West Railway Company Limited",
				"slug": "east-west-railway-company",
				"acronym": "EWRC"
			},
			{
				"title": "Ebbsfleet Development Corporation",
				"slug": "ebbsfleet-development-corporation",
				"acronym": ""
			},
			{
				"title": "Economic and Social Research Council",
				"slug": "economic-and-social-research-council",
				"acronym": "ESRC"
			},
			{
				"title": "Education and Skills Funding Agency",
				"slug": "education-and-skills-funding-agency",
				"acronym": "ESFA"
			},
			{
				"title": "The Electoral Commission",
				"slug": "the-electoral-commission",
				"acronym": ""
			},
			{
				"title": "Engineering Construction Industry Training Board",
				"slug": "engineering-construction-industry-training-board",
				"acronym": "ECITB"
			},
			{
				"title": "Engineering and Physical Sciences Research Council",
				"slug": "engineering-and-physical-sciences-research-council",
				"acronym": "EPSRC"
			},
			{
				"title": "English Institute of Sport",
				"slug": "english-institute-of-sport",
				"acronym": ""
			},
			{
				"title": "Environment Agency",
				"slug": "environment-agency",
				"acronym": "EA"
			},
			{
				"title": "Equality and Human Rights Commission",
				"slug": "equality-and-human-rights-commission",
				"acronym": "EHRC"
			},
			{
				"title": "Estyn",
				"slug": "estyn",
				"acronym": ""
			},
			{
				"title": "The Executive Office (Northern Ireland)",
				"slug": "the-executive-office-northern-ireland",
				"acronym": ""
			},
			{
				"title": "Exmoor National Park Authority",
				"slug": "exmoor-national-park-authority",
				"acronym": "Exmoor"
			},
			{
				"title": "Export Guarantees Advisory Council",
				"slug": "export-guarantees-advisory-council",
				"acronym": "EGAC"
			},
			{
				"title": "FCO Services",
				"slug": "fco-services",
				"acronym": "FCOS"
			},
			{
				"title": "Family Justice Council",
				"slug": "family-justice-council",
				"acronym": "FJC"
			},
			{
				"title": "Family Procedure Rule Committee",
				"slug": "family-procedure-rule-committee",
				"acronym": "FPRC"
			},
			{
				"title": "Financial Conduct Authority",
				"slug": "financial-conduct-authority",
				"acronym": "FCA"
			},
			{
				"title": "Fire Service College",
				"slug": "fire-service-college",
				"acronym": "FSC"
			},
			{
				"title": "Fleet Air Arm Museum ",
				"slug": "fleet-air-arm-museum",
				"acronym": ""
			},
			{
				"title": "Forensic Science Regulator",
				"slug": "forensic-science-regulator",
				"acronym": "FSR"
			},
			{
				"title": "Forest Enterprise (England) ",
				"slug": "forest-enterprise-england",
				"acronym": "FEE"
			},
			{
				"title": "Forest Research",
				"slug": "forest-research",
				"acronym": ""
			},
			{
				"title": "Gambling Commission",
				"slug": "gambling-commission",
				"acronym": ""
			},
			{
				"title": "Gangmasters and Labour Abuse Authority",
				"slug": "gangmasters-and-labour-abuse-authority",
				"acronym": "GLAA"
			},
			{
				"title": "Geffrye Museum",
				"slug": "geffrye-museum",
				"acronym": "GMus"
			},
			{
				"title": "General Advisory Committee on Science",
				"slug": "general-advisory-committee-on-science",
				"acronym": "GACS"
			},
			{
				"title": "Government Communications Headquarters",
				"slug": "government-communications-headquarters",
				"acronym": "GCHQ"
			},
			{
				"title": "Government Equalities Office  ",
				"slug": "government-equalities-office",
				"acronym": "GEO"
			},
			{
				"title": "Government Estates Management",
				"slug": "government-estates-management",
				"acronym": "GEM"
			},
			{
				"title": "Government Internal Audit Agency",
				"slug": "government-internal-audit-agency",
				"acronym": "GIAA"
			},
			{
				"title": "Government Office for Science",
				"slug": "government-office-for-science",
				"acronym": "GO-Science"
			},
			{
				"title": "Government Property Agency",
				"slug": "government-property-agency",
				"acronym": "GPA"
			},
			{
				"title": "Great Britain-China Centre",
				"slug": "great-britain-china-centre",
				"acronym": "GBCC"
			},
			{
				"title": "Groceries Code Adjudicator",
				"slug": "groceries-code-adjudicator",
				"acronym": "GCA"
			},
			{
				"title": "HM Courts & Tribunals Service",
				"slug": "hm-courts-and-tribunals-service",
				"acronym": "HMCTS"
			},
			{
				"title": "HM Crown Prosecution Service Inspectorate",
				"slug": "hm-crown-prosecution-service-inspectorate",
				"acronym": "HMCPSI"
			},
			{
				"title": "HM Inspectorate of Constabulary and Fire & Rescue Services",
				"slug": "hm-inspectorate-of-constabulary-and-fire-rescue-services",
				"acronym": "HMICFRS"
			},
			{
				"title": "HM Inspectorate of Prisons",
				"slug": "hm-inspectorate-of-prisons",
				"acronym": ""
			},
			{
				"title": "HM Inspectorate of Probation",
				"slug": "hm-inspectorate-of-probation",
				"acronym": ""
			},
			{
				"title": "HM Prison Service",
				"slug": "hm-prison-service",
				"acronym": "HMPS"
			},
			{
				"title": "Health Education England",
				"slug": "health-education-england",
				"acronym": "HEE"
			},
			{
				"title": "Health Research Authority",
				"slug": "health-research-authority",
				"acronym": "HRA"
			},
			{
				"title": "Health and Safety Executive",
				"slug": "health-and-safety-executive",
				"acronym": "HSE"
			},
			{
				"title": "Her Majesty's Government Communications Centre",
				"slug": "her-majestys-government-communications-centre",
				"acronym": "HMGCC"
			},
			{
				"title": "Her Majesty’s Prison and Probation Service",
				"slug": "her-majestys-prison-and-probation-service",
				"acronym": "HMPPS"
			},
			{
				"title": "Heritage Lottery Fund (administered by the NHMF)",
				"slug": "heritage-lottery-fund",
				"acronym": "HLF"
			},
			{
				"title": "High Speed Two (HS2) Limited",
				"slug": "high-speed-two-limited",
				"acronym": "HS2 Ltd"
			},
			{
				"title": "Higher Education Funding Council for England",
				"slug": "higher-education-funding-council-for-england",
				"acronym": "HEFCE"
			},
			{
				"title": "Higher Education Statistics Agency",
				"slug": "higher-education-statistical-agency",
				"acronym": "HESA"
			},
			{
				"title": "Highways England",
				"slug": "highways-england",
				"acronym": "Highways England"
			},
			{
				"title": "Historic England",
				"slug": "historic-england",
				"acronym": "HE"
			},
			{
				"title": "Homes England",
				"slug": "homes-england",
				"acronym": ""
			},
			{
				"title": "Horniman Public Museum and Public Park Trust",
				"slug": "horniman-museum",
				"acronym": "Horniman"
			},
			{
				"title": "Horserace Betting Levy Board",
				"slug": "horserace-betting-levy-board",
				"acronym": "HBLB"
			},
			{
				"title": "House of Lords Appointments Commission",
				"slug": "house-of-lords-appointments-commission",
				"acronym": "HOLAC"
			},
			{
				"title": "Housing Ombudsman",
				"slug": "housing-ombudsman",
				"acronym": "HOS"
			},
			{
				"title": "Human Fertilisation and Embryology Authority",
				"slug": "human-fertilisation-and-embryology-authority",
				"acronym": "HFEA"
			},
			{
				"title": "Human Tissue Authority",
				"slug": "human-tissue-authority",
				"acronym": "HTA"
			},
			{
				"title": "Imperial War Museum",
				"slug": "imperial-war-museum",
				"acronym": "IWM"
			},
			{
				"title": "Independent Advisory Panel on Deaths in Custody",
				"slug": "independent-advisory-panel-on-deaths-in-custody",
				"acronym": "IAPDC"
			},
			{
				"title": "Independent Agricultural Appeals Panel",
				"slug": "independent-agricultural-appeals-panel",
				"acronym": "IAAP"
			},
			{
				"title": "Independent Anti-slavery Commissioner",
				"slug": "independent-anti-slavery-commissioner",
				"acronym": "IASC"
			},
			{
				"title": "Independent Case Examiner",
				"slug": "independent-case-examiner",
				"acronym": "ICE"
			},
			{
				"title": "Independent Chief Inspector of Borders and Immigration ",
				"slug": "independent-chief-inspector-of-borders-and-immigration",
				"acronym": "ICIBI"
			},
			{
				"title": "Independent Commission for Aid Impact",
				"slug": "independent-commission-for-aid-impact",
				"acronym": "ICAI"
			},
			{
				"title": "Independent Commission on Freedom of Information",
				"slug": "independent-commission-on-freedom-of-information",
				"acronym": ""
			},
			{
				"title": "Independent Complaints Reviewer",
				"slug": "independent-complaints-reviewer",
				"acronym": "ICR"
			},
			{
				"title": "Independent Dormant Assets Commission ",
				"slug": "dormant-assets-commission",
				"acronym": ""
			},
			{
				"title": "Independent Family Returns Panel",
				"slug": "independent-family-returns-panel",
				"acronym": "IFRP"
			},
			{
				"title": "Independent Medical Expert Group",
				"slug": "independent-medical-expert-group",
				"acronym": "IMEG"
			},
			{
				"title": "Independent Monitoring Boards",
				"slug": "independent-monitoring-boards-of-prisons-immigration-removal-centres-and-short-term-holding-rooms",
				"acronym": "IMB"
			},
			{
				"title": "Independent Office for Police Conduct",
				"slug": "independent-office-for-police-conduct",
				"acronym": "IOPC"
			},
			{
				"title": "Independent Parliamentary Standards Authority ",
				"slug": "independent-parliamentary-standards-authority",
				"acronym": "IPSA"
			},
			{
				"title": "Independent Reconfiguration Panel",
				"slug": "independent-reconfiguration-panel",
				"acronym": "IRP"
			},
			{
				"title": "Independent Review Mechanism",
				"slug": "independent-review-mechanism",
				"acronym": "IRM"
			},
			{
				"title": "Independent Reviewer of Terrorism Legislation",
				"slug": "independent-reviewer-of-terrorism-legislation",
				"acronym": "Independent Reviewer"
			},
			{
				"title": "Industrial Development Advisory Board",
				"slug": "industrial-development-advisory-board",
				"acronym": "IDAB"
			},
			{
				"title": "Industrial Injuries Advisory Council",
				"slug": "industrial-injuries-advisory-council",
				"acronym": "IIAC"
			},
			{
				"title": "Information Commissioner's Office",
				"slug": "information-commissioner-s-office",
				"acronym": "ICO"
			},
			{
				"title": "Infrastructure and Projects Authority",
				"slug": "infrastructure-and-projects-authority",
				"acronym": "IPA"
			},
			{
				"title": "Insolvency Rules Committee",
				"slug": "insolvency-rules-committee",
				"acronym": "IRC"
			},
			{
				"title": "The Insolvency Service",
				"slug": "insolvency-service",
				"acronym": "the Insolvency Service"
			},
			{
				"title": "Institute for Apprenticeships ",
				"slug": "institute-for-apprenticeships",
				"acronym": "IFA"
			},
			{
				"title": "Intellectual Property Office",
				"slug": "intellectual-property-office",
				"acronym": "IPO"
			},
			{
				"title": "Intelligence Services Commissioner",
				"slug": "intelligence-services-commissioner",
				"acronym": "ISC"
			},
			{
				"title": "Investigatory Powers Commissioner's Office",
				"slug": "investigatory-powers-commissioners-office",
				"acronym": "IPCO"
			},
			{
				"title": "Investigatory Powers Tribunal",
				"slug": "investigatory-powers-tribunal",
				"acronym": "IPT"
			},
			{
				"title": "Iraq Inquiry",
				"slug": "iraq-inquiry",
				"acronym": ""
			},
			{
				"title": "Joint Nature Conservation Committee",
				"slug": "joint-nature-conservation-committee",
				"acronym": "JNCC"
			},
			{
				"title": "Judicial Appointments Commission",
				"slug": "judicial-appointments-commission",
				"acronym": "JAC"
			},
			{
				"title": "Judicial Appointments and Conduct Ombudsman",
				"slug": "judicial-appointments-and-conduct-ombudsman",
				"acronym": "JACO"
			},
			{
				"title": "Judicial Office",
				"slug": "judicial-office",
				"acronym": "JO"
			},
			{
				"title": "Lake District National Park Authority",
				"slug": "lake-district-national-park-authority",
				"acronym": "LDNP"
			},
			{
				"title": "Lammy Review",
				"slug": "lammy-review",
				"acronym": ""
			},
			{
				"title": "Land Registration Rule Committee",
				"slug": "land-registration-rule-committee",
				"acronym": "LRRC"
			},
			{
				"title": "Law Commission",
				"slug": "law-commission",
				"acronym": ""
			},
			{
				"title": "Leasehold Advisory Service",
				"slug": "leasehold-advisory-service",
				"acronym": "LEASE"
			},
			{
				"title": "Legal Aid Agency",
				"slug": "legal-aid-agency",
				"acronym": "LAA"
			},
			{
				"title": "The Legal Ombudsman",
				"slug": "the-legal-ombudsman",
				"acronym": ""
			},
			{
				"title": "Legal Services Board",
				"slug": "legal-services-board",
				"acronym": "LSB"
			},
			{
				"title": "Local Government Ombudsman",
				"slug": "local-government-ombudsman",
				"acronym": "LGO"
			},
			{
				"title": "LocatED",
				"slug": "located",
				"acronym": ""
			},
			{
				"title": "Low Level Waste Repository Ltd ",
				"slug": "low-level-waste-repository-ltd",
				"acronym": "LLWR"
			},
			{
				"title": "Low Pay Commission",
				"slug": "low-pay-commission",
				"acronym": "LPC"
			},
			{
				"title": "Macur Review",
				"slug": "macur-review",
				"acronym": ""
			},
			{
				"title": "Magnox Ltd",
				"slug": "magnox-ltd",
				"acronym": ""
			},
			{
				"title": "Marine Accident Investigation Branch",
				"slug": "marine-accident-investigation-branch",
				"acronym": "MAIB"
			},
			{
				"title": "Marine Management Organisation",
				"slug": "marine-management-organisation",
				"acronym": "MMO"
			},
			{
				"title": "Maritime and Coastguard Agency",
				"slug": "maritime-and-coastguard-agency",
				"acronym": "MCA"
			},
			{
				"title": "Marshall Aid Commemoration Commission",
				"slug": "marshall-aid-commemoration-commission",
				"acronym": "MACC"
			},
			{
				"title": "Medical Research Council",
				"slug": "medical-research-council",
				"acronym": "MRC"
			},
			{
				"title": "Medicines and Healthcare products Regulatory Agency",
				"slug": "medicines-and-healthcare-products-regulatory-agency",
				"acronym": "MHRA"
			},
			{
				"title": "Met Office",
				"slug": "met-office",
				"acronym": ""
			},
			{
				"title": "Migration Advisory Committee",
				"slug": "migration-advisory-committee",
				"acronym": "MAC"
			},
			{
				"title": "Morecambe Bay Investigation",
				"slug": "morecambe-bay-investigation",
				"acronym": ""
			},
			{
				"title": "NHS Blood and Transplant",
				"slug": "nhs-blood-and-transplant",
				"acronym": "NHSBT"
			},
			{
				"title": "NHS Business Services Authority",
				"slug": "nhs-business-services-authority",
				"acronym": "NHSBSA"
			},
			{
				"title": "NHS Counter Fraud Authority",
				"slug": "nhs-counter-fraud-authority",
				"acronym": "NHSCFA"
			},
			{
				"title": "NHS Digital",
				"slug": "nhs-digital",
				"acronym": ""
			},
			{
				"title": "NHS England",
				"slug": "nhs-commissioning-board",
				"acronym": ""
			},
			{
				"title": "NHS Improvement",
				"slug": "nhs-improvement",
				"acronym": ""
			},
			{
				"title": "NHS Litigation Authority",
				"slug": "nhs-litigation-authority",
				"acronym": "NHSLA"
			},
			{
				"title": "NHS Pay Review Body",
				"slug": "nhs-pay-review-body",
				"acronym": "NHSPRB"
			},
			{
				"title": "NHS Wales Informatics Service",
				"slug": "nhs-wales-informatics-service",
				"acronym": ""
			},
			{
				"title": "National Army Museum",
				"slug": "national-army-museum",
				"acronym": "NAM"
			},
			{
				"title": "National Counter Terrorism Security Office",
				"slug": "national-counter-terrorism-security-office",
				"acronym": "NaCTSO"
			},
			{
				"title": "National Crime Agency Remuneration Review Body ",
				"slug": "national-crime-agency-remuneration-review-body",
				"acronym": "NCARRB"
			},
			{
				"title": "National Data Guardian",
				"slug": "national-data-guardian",
				"acronym": "NDG"
			},
			{
				"title": "National Forest Company",
				"slug": "national-forest-company",
				"acronym": "NFC"
			},
			{
				"title": "National Gallery",
				"slug": "national-gallery",
				"acronym": ""
			},
			{
				"title": "National Heritage Memorial Fund",
				"slug": "national-heritage-memorial-fund",
				"acronym": "NHMF"
			},
			{
				"title": "National Information Board",
				"slug": "national-information-board",
				"acronym": "NIB"
			},
			{
				"title": "National Infrastructure Commission",
				"slug": "national-infrastructure-commission",
				"acronym": ""
			},
			{
				"title": "National Institute for Health and Care Excellence",
				"slug": "national-institute-for-clinical-excellence",
				"acronym": "NICE"
			},
			{
				"title": "National Museum of the Royal Navy",
				"slug": "royal-naval-museum",
				"acronym": "RNM"
			},
			{
				"title": "National Museums Liverpool",
				"slug": "national-museums-liverpool",
				"acronym": "NML"
			},
			{
				"title": "National Portrait Gallery",
				"slug": "national-portrait-gallery",
				"acronym": "NPG"
			},
			{
				"title": "National Probation Service",
				"slug": "national-probation-service",
				"acronym": "NPS"
			},
			{
				"title": "Natural England",
				"slug": "natural-england",
				"acronym": "Natural England"
			},
			{
				"title": "Natural Environment Research Council",
				"slug": "natural-environment-research-council",
				"acronym": "NERC"
			},
			{
				"title": "Natural History Museum",
				"slug": "natural-history-museum",
				"acronym": "NHM"
			},
			{
				"title": "Natural Resources Wales",
				"slug": "natural-resources-wales",
				"acronym": ""
			},
			{
				"title": "Network Rail",
				"slug": "network-rail",
				"acronym": ""
			},
			{
				"title": "New Forest National Park Authority",
				"slug": "new-forest-national-park-authority",
				"acronym": "NFNPA"
			},
			{
				"title": "North York Moors National Park Authority",
				"slug": "north-york-moors-national-park",
				"acronym": "NYMNP"
			},
			{
				"title": "Northern Ireland Council for the Curriculum, Examinations and Assessment",
				"slug": "northern-ireland-council-for-the-curriculum-examinations-and-assessment",
				"acronym": ""
			},
			{
				"title": " Northern Ireland Housing Executive ",
				"slug": "northern-ireland-housing-executive",
				"acronym": "NIHE"
			},
			{
				"title": "Northern Ireland Human Rights Commission",
				"slug": "northern-ireland-human-rights-commission",
				"acronym": "NIHRC"
			},
			{
				"title": "Northern Ireland Policing Board",
				"slug": "northern-ireland-policing-board",
				"acronym": ""
			},
			{
				"title": "Northern Ireland Statistics and Research Agency",
				"slug": "northern-ireland-statistics-and-research-agency",
				"acronym": "NISRA"
			},
			{
				"title": "Northern Lighthouse Board",
				"slug": "northern-lighthouse-board",
				"acronym": "NLB"
			},
			{
				"title": "Northumberland National Park Authority",
				"slug": "northumberland-national-park-authority",
				"acronym": ""
			},
			{
				"title": "Nuclear Decommissioning Authority",
				"slug": "nuclear-decommissioning-authority",
				"acronym": "NDA"
			},
			{
				"title": "Nuclear Liabilities Financing Assurance Board",
				"slug": "nuclear-liabilities-financing-assurance-board",
				"acronym": "NLFAB"
			},
			{
				"title": "Nuclear Research Advisory Council",
				"slug": "nuclear-research-advisory-council",
				"acronym": "NRAC"
			},
			{
				"title": "Ofcom",
				"slug": "ofcom",
				"acronym": "Ofcom"
			},
			{
				"title": "Office for Budget Responsibility",
				"slug": "office-for-budget-responsibility",
				"acronym": "OBR"
			},
			{
				"title": "Office for Fair Access",
				"slug": "office-for-fair-access",
				"acronym": "OFFA"
			},
			{
				"title": "Office for National Statistics",
				"slug": "office-for-national-statistics",
				"acronym": "ONS"
			},
			{
				"title": "Office for Students",
				"slug": "office-for-students",
				"acronym": "OfS"
			},
			{
				"title": "Office of Manpower Economics",
				"slug": "office-of-manpower-economics",
				"acronym": "OME"
			},
			{
				"title": "Office of Surveillance Commissioners",
				"slug": "office-of-surveillance-commissioners",
				"acronym": "OSC"
			},
			{
				"title": "Office of Tax Simplification",
				"slug": "office-of-tax-simplification",
				"acronym": "OTS"
			},
			{
				"title": "Office of the Children's Commissioner",
				"slug": "office-of-the-children-s-commissioner",
				"acronym": ""
			},
			{
				"title": "Office of the Immigration Services Commissioner",
				"slug": "office-of-the-immigration-services-commissioner",
				"acronym": "OISC"
			},
			{
				"title": "Office of the Public Guardian",
				"slug": "office-of-the-public-guardian",
				"acronym": "OPG"
			},
			{
				"title": "Office of the Registrar of Consultant Lobbyists",
				"slug": "office-of-the-registrar-of-consultant-lobbyists",
				"acronym": "ORCL"
			},
			{
				"title": "Office of the Regulator of Community Interest Companies",
				"slug": "office-of-the-regulator-of-community-interest-companies",
				"acronym": "CIC Regulator"
			},
			{
				"title": "Office of the Schools Adjudicator",
				"slug": "office-of-the-schools-adjudicator",
				"acronym": "OSA"
			},
			{
				"title": "Official Solicitor and Public Trustee",
				"slug": "official-solicitor-and-public-trustee",
				"acronym": "OSPT"
			},
			{
				"title": "Oil and Gas Authority",
				"slug": "oil-and-gas-authority",
				"acronym": "OGA"
			},
			{
				"title": "Parades Commission for Northern Ireland",
				"slug": "parades-commission-for-northern-ireland",
				"acronym": "PCNI"
			},
			{
				"title": "The Parliamentary and Health Service Ombudsman ",
				"slug": "the-parliamentary-and-health-service-ombudsman",
				"acronym": "The Ombudsman"
			},
			{
				"title": "Parole Board",
				"slug": "parole-board",
				"acronym": "Parole Board"
			},
			{
				"title": "Payment Systems Regulator",
				"slug": "payment-systems-regulator",
				"acronym": "PSR"
			},
			{
				"title": "Peak District National Park Authority",
				"slug": "peak-district-national-park",
				"acronym": "PDNP"
			},
			{
				"title": "The Pension Protection Fund Ombudsman",
				"slug": "pension-protection-fund-ombudsman",
				"acronym": "PPFO"
			},
			{
				"title": "The Pensions Advisory Service",
				"slug": "the-pensions-advisory-service",
				"acronym": "TPAS"
			},
			{
				"title": "The Pensions Ombudsman",
				"slug": "pensions-ombudsman",
				"acronym": "PO"
			},
			{
				"title": "The Pensions Regulator",
				"slug": "the-pensions-regulator",
				"acronym": "TPR"
			},
			{
				"title": "Planning Inspectorate",
				"slug": "planning-inspectorate",
				"acronym": "The Planning Inspectorate"
			},
			{
				"title": "Plant Varieties and Seeds Tribunal",
				"slug": "plant-varieties-and-seeds-tribunal",
				"acronym": "PVST"
			},
			{
				"title": "Police Advisory Board for England and Wales",
				"slug": "police-advisory-board-for-england-and-wales",
				"acronym": "PAB"
			},
			{
				"title": "Police Discipline Appeals Tribunal",
				"slug": "police-discipline-appeals-tribunal",
				"acronym": "Police Discipline"
			},
			{
				"title": "Police Remuneration Review Body",
				"slug": "police-remuneration-review-body",
				"acronym": "PRRB"
			},
			{
				"title": "Porton Biopharma Limited",
				"slug": "porton-biopharma-limited",
				"acronym": "PBL"
			},
			{
				"title": "Prison Service Pay Review Body",
				"slug": "prison-services-pay-review-body",
				"acronym": "PSPRB"
			},
			{
				"title": "Prisons and Probation Ombudsman",
				"slug": "prisons-and-probation-ombudsman",
				"acronym": "PPO"
			},
			{
				"title": "Privy Council Office",
				"slug": "privy-council-office",
				"acronym": "PCO"
			},
			{
				"title": "Probation Board for Northern Ireland",
				"slug": "probation-board-for-northern-ireland",
				"acronym": "PBNI"
			},
			{
				"title": "Professional Standards Authority for Health and Social Care",
				"slug": "professional-standards-authority-for-health-and-social-care",
				"acronym": ""
			},
			{
				"title": "Public Health England",
				"slug": "public-health-england",
				"acronym": "PHE"
			},
			{
				"title": "Public Health Wales",
				"slug": "public-health-wales",
				"acronym": "PHW"
			},
			{
				"title": "Public Prosecution Service for Northern Ireland",
				"slug": "public-prosecution-service-for-northern-ireland",
				"acronym": ""
			},
			{
				"title": "Pubs Code Adjudicator",
				"slug": "pubs-code-adjudicator",
				"acronym": "PCA"
			},
			{
				"title": "Queen Elizabeth II Conference Centre",
				"slug": "queen-elizabeth-ii-conference-centre",
				"acronym": "QEIICC"
			},
			{
				"title": "Radioactive Waste Management",
				"slug": "radioactive-waste-management",
				"acronym": "RWM"
			},
			{
				"title": "Rail Accident Investigation Branch",
				"slug": "rail-accident-investigation-branch",
				"acronym": "RAIB"
			},
			{
				"title": "Rail Safety and Standards Board",
				"slug": "rail-safety-and-standards-board",
				"acronym": "RSSB"
			},
			{
				"title": "Regulator of Social Housing",
				"slug": "regulator-of-social-housing",
				"acronym": "RSH"
			},
			{
				"title": "Regulatory Policy Committee",
				"slug": "regulatory-policy-committee",
				"acronym": "RPC"
			},
			{
				"title": "Remploy Pension Scheme Trustees Ltd ",
				"slug": "remploy-pension-scheme-trustees-ltd",
				"acronym": ""
			},
			{
				"title": "Reserve Forces' and Cadets' Associations",
				"slug": "reserve-forces-and-cadets-associations",
				"acronym": "RFCA"
			},
			{
				"title": "Review Body on Doctors' and Dentists' Remuneration",
				"slug": "review-body-on-doctors-and-dentists-remuneration",
				"acronym": "DDRB"
			},
			{
				"title": "The Reviewing Committee on the Export of Works of Art and Objects of Cultural Interest",
				"slug": "the-reviewing-committee-on-the-export-of-works-of-art-and-objects-of-cultural-interest",
				"acronym": "RCEWA"
			},
			{
				"title": "Royal Air Force Museum",
				"slug": "royal-air-force-museum",
				"acronym": "RAFM"
			},
			{
				"title": "Royal Armouries Museum",
				"slug": "royal-armouries-museum",
				"acronym": "RA"
			},
			{
				"title": "Royal Marines Museum",
				"slug": "royal-marines-museum",
				"acronym": "RMM"
			},
			{
				"title": "Royal Mint",
				"slug": "royal-mint",
				"acronym": "RM"
			},
			{
				"title": "Royal Mint Advisory Committee",
				"slug": "royal-mint-advisory-committee",
				"acronym": "RMAC"
			},
			{
				"title": "Royal Museums Greenwich",
				"slug": "royal-museums-greenwich",
				"acronym": "RMG"
			},
			{
				"title": "Royal Navy Submarine Museum",
				"slug": "royal-navy-submarine-museum",
				"acronym": "RNSM"
			},
			{
				"title": "Royal Parks",
				"slug": "royal-parks",
				"acronym": "Royal Parks"
			},
			{
				"title": "Rural Payments Agency",
				"slug": "rural-payments-agency",
				"acronym": "RPA"
			},
			{
				"title": "S4C",
				"slug": "s4c",
				"acronym": "S4C"
			},
			{
				"title": "School Teachers' Review Body",
				"slug": "school-teachers-review-body",
				"acronym": "STRB"
			},
			{
				"title": "Science Advisory Council",
				"slug": "science-advisory-council",
				"acronym": "SAC"
			},
			{
				"title": "Science Museum Group",
				"slug": "science-museum-group",
				"acronym": ""
			},
			{
				"title": "Science and Technology Facilities Council",
				"slug": "science-and-technology-facilities-council",
				"acronym": "STFC"
			},
			{
				"title": "Scientific Advisory Committee on the Medical Implications of Less-Lethal Weapons",
				"slug": "science-advisory-committee-on-the-medical-implications-of-less-lethal-weapons",
				"acronym": "SACMILL"
			},
			{
				"title": "Sea Fish Industry Authority",
				"slug": "sea-fish-industry-authority",
				"acronym": "Seafish"
			},
			{
				"title": "Secret Intelligence Service",
				"slug": "secret-intelligence-service",
				"acronym": "SIS"
			},
			{
				"title": "Security Industry Authority",
				"slug": "security-industry-authority",
				"acronym": "SIA"
			},
			{
				"title": "The Security Service",
				"slug": "the-security-service-mi5",
				"acronym": "MI5"
			},
			{
				"title": "Security Vetting Appeals Panel",
				"slug": "security-vetting-appeals-panel",
				"acronym": "SVAP"
			},
			{
				"title": "Sellafield Ltd",
				"slug": "sellafield-ltd",
				"acronym": ""
			},
			{
				"title": "Senior Salaries Review Body ",
				"slug": "review-body-on-senior-salaries",
				"acronym": "SSRB"
			},
			{
				"title": "Sentencing Council for England and Wales",
				"slug": "the-sentencing-council-for-england-and-wales",
				"acronym": "SC"
			},
			{
				"title": "Service Complaints Ombudsman ",
				"slug": "service-complaints-ombudsman",
				"acronym": ""
			},
			{
				"title": "Service Prosecuting Authority",
				"slug": "service-prosecuting-authority",
				"acronym": "SPA"
			},
			{
				"title": "Single Source Regulations Office",
				"slug": "single-source-regulations-office",
				"acronym": "SSRO"
			},
			{
				"title": "Sir John Soane's Museum",
				"slug": "sir-john-soane-s-museum",
				"acronym": "Soane's"
			},
			{
				"title": "Small Business Commissioner",
				"slug": "small-business-commissioner",
				"acronym": "SBC"
			},
			{
				"title": "Social Mobility Commission",
				"slug": "social-mobility-commission",
				"acronym": ""
			},
			{
				"title": "Social Science Research Committee",
				"slug": "social-science-research-committee",
				"acronym": "SSRC"
			},
			{
				"title": "Social Security Advisory Committee",
				"slug": "social-security-advisory-committee",
				"acronym": "SSAC"
			},
			{
				"title": "South Downs National Park Authority",
				"slug": "south-downs-national-park-authority",
				"acronym": "SDNP"
			},
			{
				"title": "Sport England",
				"slug": "sport-england",
				"acronym": "SE"
			},
			{
				"title": "Sports Council for Wales",
				"slug": "sports-council-for-wales",
				"acronym": ""
			},
			{
				"title": "Sports Grounds Safety Authority",
				"slug": "sports-grounds-safety-authority",
				"acronym": "SGSA"
			},
			{
				"title": "Stabilisation Unit",
				"slug": "stabilisation-unit",
				"acronym": "SU"
			},
			{
				"title": "Standards and Testing Agency",
				"slug": "standards-and-testing-agency",
				"acronym": "STA"
			},
			{
				"title": "Student Loans Company",
				"slug": "student-loans-company",
				"acronym": "SLC"
			},
			{
				"title": "Surveillance Camera Commissioner",
				"slug": "surveillance-camera-commissioner",
				"acronym": "SCC"
			},
			{
				"title": "Tate",
				"slug": "tate",
				"acronym": "Tate"
			},
			{
				"title": "Teaching Regulation Agency",
				"slug": "teaching-regulation-agency",
				"acronym": "TRA"
			},
			{
				"title": "Technical Advisory Board",
				"slug": "technical-advisory-board",
				"acronym": "TAB"
			},
			{
				"title": "The Theatres Trust",
				"slug": "the-theatres-trust",
				"acronym": "TTT"
			},
			{
				"title": "Traffic Commissioners for Great Britain",
				"slug": "traffic-commissioners",
				"acronym": "TC"
			},
			{
				"title": "Transport Focus",
				"slug": "transport-focus",
				"acronym": ""
			},
			{
				"title": "Treasure Valuation Committee",
				"slug": "treasure-valuation-committee",
				"acronym": "TVC"
			},
			{
				"title": "Tribunal Procedure Committee",
				"slug": "tribunal-procedure-committee",
				"acronym": "TPC"
			},
			{
				"title": "Trinity House",
				"slug": "trinity-house",
				"acronym": "TLS"
			},
			{
				"title": "UK Anti-Doping",
				"slug": "uk-anti-doping",
				"acronym": "UKAD"
			},
			{
				"title": "UK Atomic Energy Authority",
				"slug": "uk-atomic-energy-authority",
				"acronym": "UKAEA"
			},
			{
				"title": "UK Co-ordinating Body",
				"slug": "uk-co-ordinating-body",
				"acronym": "UKCB"
			},
			{
				"title": "UK Debt Management Office",
				"slug": "uk-debt-management-office",
				"acronym": "DMO"
			},
			{
				"title": "UK Financial Investments Limited",
				"slug": "uk-financial-investments-limited",
				"acronym": "UKFI"
			},
			{
				"title": "UK Government Investments",
				"slug": "uk-government-investments",
				"acronym": "UKGI"
			},
			{
				"title": "UK Holocaust Memorial Foundation",
				"slug": "uk-holocaust-memorial-foundation",
				"acronym": "UKHMF"
			},
			{
				"title": "UK Hydrographic Office",
				"slug": "uk-hydrographic-office",
				"acronym": "UKHO"
			},
			{
				"title": "UK Research and Innovation",
				"slug": "uk-research-and-innovation",
				"acronym": "UKRI"
			},
			{
				"title": "UK Space Agency",
				"slug": "uk-space-agency",
				"acronym": ""
			},
			{
				"title": "UK Sport",
				"slug": "uk-sport",
				"acronym": "UKSP"
			},
			{
				"title": "United Kingdom Reserve Forces Association",
				"slug": "united-kingdom-reserve-forces-association",
				"acronym": "UKRFA"
			},
			{
				"title": "Valuation Office Agency",
				"slug": "valuation-office-agency",
				"acronym": "VOA"
			},
			{
				"title": "Valuation Tribunal Service",
				"slug": "valuation-tribunal-service-for-england-valuation-tribunal-service",
				"acronym": "VTS"
			},
			{
				"title": "Valuation Tribunal for England ",
				"slug": "valuation-tribunal-for-england",
				"acronym": "VTE"
			},
			{
				"title": "Vehicle Certification Agency",
				"slug": "vehicle-certification-agency",
				"acronym": "VCA"
			},
			{
				"title": "Veterans Advisory and Pensions Committees",
				"slug": "veterans-advisory-and-pensions-committees-x13",
				"acronym": "VAPC"
			},
			{
				"title": "Veterinary Medicines Directorate",
				"slug": "veterinary-medicines-directorate",
				"acronym": "VMD"
			},
			{
				"title": "Veterinary Products Committee",
				"slug": "veterinary-products-committee",
				"acronym": "VPC"
			},
			{
				"title": "Victims' Commissioner",
				"slug": "victims-commissioner",
				"acronym": ""
			},
			{
				"title": "Victoria and Albert Museum",
				"slug": "victoria-and-albert-museum",
				"acronym": "VAM"
			},
			{
				"title": "VisitBritain",
				"slug": "visitbritain",
				"acronym": "VB"
			},
			{
				"title": "VisitEngland",
				"slug": "visitengland",
				"acronym": "VE"
			},
			{
				"title": "Wales Audit Office",
				"slug": "wales-audit-office",
				"acronym": ""
			},
			{
				"title": "Wallace Collection",
				"slug": "wallace-collection",
				"acronym": ""
			},
			{
				"title": "Welsh Language Commissioner",
				"slug": "welsh-language-commissioner",
				"acronym": ""
			},
			{
				"title": "Westminster Foundation for Democracy",
				"slug": "westminster-foundation-for-democracy",
				"acronym": ""
			},
			{
				"title": "Wilton Park",
				"slug": "wilton-park",
				"acronym": "Wilton Park"
			},
			{
				"title": "Yorkshire Dales National Park Authority",
				"slug": "yorkshire-dales-national-park-authority",
				"acronym": "YDNP"
			},
			{
				"title": "Youth Justice Board for England and Wales",
				"slug": "youth-justice-board-for-england-and-wales",
				"acronym": "YJB"
			},
			{
				"title": "Bona Vacantia",
				"slug": "bona-vacantia",
				"acronym": "BVD"
			},
			{
				"title": "Border Force",
				"slug": "border-force",
				"acronym": "BF"
			},
			{
				"title": "British Cattle Movement Service",
				"slug": "british-cattle-movement-service",
				"acronym": "BCMS"
			},
			{
				"title": "Cabinet Office Board",
				"slug": "cabinet-office-board",
				"acronym": ""
			},
			{
				"title": "Centre for Connected and Autonomous Vehicles ",
				"slug": "centre-for-connected-and-autonomous-vehicles",
				"acronym": "CCAV"
			},
			{
				"title": "Chief Fire and Rescue Adviser",
				"slug": "chief-fire-and-rescue-adviser-unit",
				"acronym": "CFRA"
			},
			{
				"title": "Civil Nuclear Constabulary",
				"slug": "civil-nuclear-constabulary",
				"acronym": "CNC"
			},
			{
				"title": "Civil Service Board",
				"slug": "civil-service-board",
				"acronym": ""
			},
			{
				"title": "Civil Service Fast Stream",
				"slug": "civil-service-fast-stream",
				"acronym": ""
			},
			{
				"title": "Civil Service Fast Track Apprenticeship",
				"slug": "civil-service-fast-track-apprenticeship",
				"acronym": ""
			},
			{
				"title": "Civil Service Reform",
				"slug": "civil-service-reform",
				"acronym": "CSR"
			},
			{
				"title": "Civil Service Resourcing",
				"slug": "civil-service-resourcing",
				"acronym": ""
			},
			{
				"title": "Defence Equipment and Support",
				"slug": "defence-equipment-and-support",
				"acronym": "DE&S"
			},
			{
				"title": "Defence Infrastructure Organisation",
				"slug": "defence-infrastructure-organisation",
				"acronym": "DIO"
			},
			{
				"title": "Defence Nuclear Organisation",
				"slug": "defence-nuclear-organisation",
				"acronym": ""
			},
			{
				"title": "Defence Safety Authority",
				"slug": "defence-safety-authority",
				"acronym": "DSA"
			},
			{
				"title": "Defence and Security Accelerator",
				"slug": "defence-and-security-accelerator",
				"acronym": "DASA"
			},
			{
				"title": "Department for International Trade Defence & Security Organisation",
				"slug": "department-for-international-trade-defence-and-security-organisation",
				"acronym": "DIT DSO"
			},
			{
				"title": "Digital, Data and Technology Profession",
				"slug": "digital-data-and-technology-profession",
				"acronym": ""
			},
			{
				"title": "District Valuer Services (DVS)",
				"slug": "district-valuer-services-dvs",
				"acronym": "DVS"
			},
			{
				"title": "Export Control Joint Unit",
				"slug": "export-control-organisation",
				"acronym": "ECJU"
			},
			{
				"title": "Financial Services Organisation",
				"slug": "financial-services-organisation",
				"acronym": ""
			},
			{
				"title": "Financial Services Trade and Investment Board",
				"slug": "financial-services-trade-and-investment-board",
				"acronym": "FSTIB"
			},
			{
				"title": "Government Chemist",
				"slug": "government-chemist",
				"acronym": "Government Chemist"
			},
			{
				"title": "Government Commercial Function",
				"slug": "government-commercial-function",
				"acronym": "GCF"
			},
			{
				"title": "Government Communication Service",
				"slug": "civil-service-government-communication-service",
				"acronym": "GCS"
			},
			{
				"title": "Government Corporate Finance Profession",
				"slug": "civil-service-corporate-finance-profession-cfp",
				"acronym": "GCFP"
			},
			{
				"title": "Government Digital Service",
				"slug": "government-digital-service",
				"acronym": "GDS"
			},
			{
				"title": "Government Economic Service",
				"slug": "civil-service-government-economic-service",
				"acronym": ""
			},
			{
				"title": "Government Finance Profession",
				"slug": "civil-service-government-finance-profession",
				"acronym": ""
			},
			{
				"title": "Government IT Profession",
				"slug": "civil-service-government-it-profession",
				"acronym": ""
			},
			{
				"title": "Government Knowledge & Information Management Profession",
				"slug": "civil-service-government-knowledge-information-management-profession",
				"acronym": ""
			},
			{
				"title": "Government Legal Service",
				"slug": "civil-service-government-legal-service",
				"acronym": "GLS"
			},
			{
				"title": "Government Occupational Psychology Profession ",
				"slug": "civil-service-government-occupational-psychology-profession",
				"acronym": ""
			},
			{
				"title": "Government Operational Research Service",
				"slug": "civil-service-government-operational-research-service",
				"acronym": ""
			},
			{
				"title": "Government Planning Inspectors",
				"slug": "civil-service-government-planning-inspectors",
				"acronym": ""
			},
			{
				"title": "Government Planning Profession",
				"slug": "civil-service-the-government-planning-profession",
				"acronym": ""
			},
			{
				"title": "Government Property Profession",
				"slug": "civil-service-government-property-profession",
				"acronym": ""
			},
			{
				"title": "Government Science & Engineering Profession",
				"slug": "civil-service-government-science-engineering",
				"acronym": ""
			},
			{
				"title": "Government Security Profession",
				"slug": "government-security-profession",
				"acronym": ""
			},
			{
				"title": "Government Social Research Profession",
				"slug": "civil-service-government-social-research-profession",
				"acronym": ""
			},
			{
				"title": "Government Statistical Service",
				"slug": "civil-service-government-statistical-service",
				"acronym": ""
			},
			{
				"title": "Government Tax Profession",
				"slug": "civil-service-government-tax-profession",
				"acronym": ""
			},
			{
				"title": "Government Veterinary Services ",
				"slug": "civil-service-government-veterinary-services",
				"acronym": ""
			},
			{
				"title": "HM Nautical Almanac Office",
				"slug": "hm-nautical-almanac-office",
				"acronym": "HMNAO"
			},
			{
				"title": "HM Passport Office",
				"slug": "hm-passport-office",
				"acronym": "HM Passport Office"
			},
			{
				"title": "Healthcare UK",
				"slug": "healthcare-uk",
				"acronym": "Healthcare UK"
			},
			{
				"title": "Human Resources Profession",
				"slug": "civil-service-human-resources-profession",
				"acronym": ""
			},
			{
				"title": "Immigration Enforcement",
				"slug": "immigration-enforcement",
				"acronym": "IE"
			},
			{
				"title": "Innovate UK",
				"slug": "innovate-uk",
				"acronym": "Innovate UK"
			},
			{
				"title": "Intelligence Analysis ",
				"slug": "civil-service-intelligence-analysis-profession",
				"acronym": ""
			},
			{
				"title": "Internal Audit Profession",
				"slug": "civil-service-internal-audit-profession",
				"acronym": ""
			},
			{
				"title": "Joint Forces Command",
				"slug": "joint-forces-command",
				"acronym": "JFC"
			},
			{
				"title": "Medical Profession",
				"slug": "civil-service-medical-profession",
				"acronym": ""
			},
			{
				"title": "Military Aviation Authority",
				"slug": "military-aviation-authority",
				"acronym": "MAA"
			},
			{
				"title": "National Cyber Security Centre",
				"slug": "national-cyber-security-centre",
				"acronym": "NCSC"
			},
			{
				"title": "National security and intelligence",
				"slug": "national-security",
				"acronym": ""
			},
			{
				"title": "Office for Civil Society",
				"slug": "office-for-civil-society",
				"acronym": "OCS"
			},
			{
				"title": "Office for Disability Issues",
				"slug": "office-for-disability-issues",
				"acronym": "ODI"
			},
			{
				"title": "Office for Life Sciences",
				"slug": "office-for-life-sciences",
				"acronym": "OLS"
			},
			{
				"title": "Office for Low Emission Vehicles",
				"slug": "office-for-low-emission-vehicles",
				"acronym": "OLEV"
			},
			{
				"title": "Office for Product Safety and Standards",
				"slug": "office-for-product-safety-and-standards",
				"acronym": ""
			},
			{
				"title": "Office of Financial Sanctions Implementation",
				"slug": "office-of-financial-sanctions-implementation",
				"acronym": "OFSI"
			},
			{
				"title": "Office of the Parliamentary Counsel",
				"slug": "office-of-the-parliamentary-counsel",
				"acronym": "OPC"
			},
			{
				"title": "Open Public Services",
				"slug": "open-public-services",
				"acronym": "OPS"
			},
			{
				"title": "Operational Delivery Profession",
				"slug": "civil-service-operational-delivery-profession",
				"acronym": ""
			},
			{
				"title": "Policy Profession",
				"slug": "civil-service-policy-profession",
				"acronym": ""
			},
			{
				"title": "Preventing Sexual Violence Initiative",
				"slug": "preventing-sexual-violence-initiative",
				"acronym": "PSVI"
			},
			{
				"title": "Procurement profession",
				"slug": "civil-service-procurement-profession",
				"acronym": ""
			},
			{
				"title": "Project Delivery Profession",
				"slug": "civil-service-project-delivery-profession",
				"acronym": ""
			},
			{
				"title": "Queen's Harbour Master",
				"slug": "queens-harbour-master",
				"acronym": "QHM"
			},
			{
				"title": "Race Disparity Unit",
				"slug": "race-disparity-unit",
				"acronym": ""
			},
			{
				"title": "Rural Development Programme for England Network",
				"slug": "rural-development-programme-for-england-network",
				"acronym": "RDPE Network"
			},
			{
				"title": "Schools Commissioners Group",
				"slug": "schools-commissioners-group",
				"acronym": ""
			},
			{
				"title": "UK Visas and Immigration",
				"slug": "uk-visas-and-immigration",
				"acronym": "UKVI"
			},
			{
				"title": "UKTI Education",
				"slug": "ukti-education",
				"acronym": "UKTI Education"
			},
			{
				"title": "UKTI Life Sciences Organisation",
				"slug": "ukti-life-sciences-organisation",
				"acronym": "UKTI LSO"
			},
			{
				"title": "Veterans UK",
				"slug": "veterans-uk",
				"acronym": "Veterans UK"
			},
			{
				"title": "jHub Defence Innovation",
				"slug": "jhub-defence-innovation",
				"acronym": ""
			},
			{
				"title": "Architects Registration Board",
				"slug": "architects-registration-board",
				"acronym": "ARB"
			},
			{
				"title": "BBC",
				"slug": "bbc",
				"acronym": "BBC"
			},
			{
				"title": "BBC World Service",
				"slug": "bbc-world-service",
				"acronym": "BBCWS"
			},
			{
				"title": "Channel 4",
				"slug": "channel-4",
				"acronym": "C4"
			},
			{
				"title": "Civil Aviation Authority",
				"slug": "civil-aviation-authority",
				"acronym": "CAA"
			},
			{
				"title": "Historic Royal Palaces",
				"slug": "historic-royal-palaces",
				"acronym": "HRP"
			},
			{
				"title": "London and Continental Railways Limited",
				"slug": "london-and-continental-railways-ltd",
				"acronym": "LCR"
			},
			{
				"title": "National Employment Savings Trust (NEST) Corporation",
				"slug": "national-employment-savings-trust",
				"acronym": "NEST Corporation"
			},
			{
				"title": "Office for Nuclear Regulation",
				"slug": "office-for-nuclear-regulation",
				"acronym": "ONR"
			},
			{
				"title": "The Oil and Pipelines Agency",
				"slug": "oil-and-pipelines-agency",
				"acronym": "OPA"
			},
			{
				"title": "Ordnance Survey",
				"slug": "ordnance-survey",
				"acronym": "OS"
			},
			{
				"title": "Pension Protection Fund",
				"slug": "pension-protection-fund",
				"acronym": "PPF"
			},
			{
				"title": "Northern Ireland Executive ",
				"slug": "northern-ireland-executive",
				"acronym": ""
			},
			{
				"title": "The Scottish Government",
				"slug": "the-scottish-government",
				"acronym": "The Scottish Government"
			},
			{
				"title": "Welsh Government",
				"slug": "welsh-government",
				"acronym": ""
			}
		];
  }

  get acronyms () {
      return this._mapping.map(entry => entry.acronym);
    }

  get titles () {
    return this._mapping.map(entry => entry.title);
  }

  get slugs () {
    return this._mapping.map(entry => entry.slug);
  }

  getTitleForAcronym (acronym) {
    const results = this._mapping.filter(entry => { return entry.acronym === acronym; });

    return (results.length) ? results[0].title : ''
  }

  getTitleForSlug (slug) {
    const results = this._mapping.filter(entry => { return entry.slug === slug; });

    return (results.length) ? results[0].title : ''
  }

  getAcronymForTitle (title) {
    const results = this._mapping.filter(entry => { return entry.title === title; });

    return (results.length) ? results[0].acronym : ''
  }

  getSlugForTitle (title) {
    const results = this._mapping.filter(entry => { return entry.title === title; });

    return (results.length) ? results[0].slug : ''
  }

  asHash () {
    return this._mapping.map(entry => {
      const result = {};

      result[entry.slug] = entry.title;
    });
  }

  putOrgAtTop (orgTitle) {
    let idx;
    let row;

    this._mapping.forEach((entry, entryIdx) => { if (entry.title === orgTitle) { idx = entryIdx; } });

    row = Object.assign({}, this._mapping[idx]);
    this._mapping.splice(idx, 1);
    this._mapping.unshift(row);
  }
};

module.exports = new Organisations;
