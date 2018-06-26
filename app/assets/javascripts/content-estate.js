accessibleAutocomplete.enhanceSelectElement({
	selectElement: document.getElementById('government-organisations'),
	showAllValues: false,
	minLength: 2,
	displayMenu: 'overlay',
	defaultValue: '',
	placeholder: 'Any organisation'
});

accessibleAutocomplete.enhanceSelectElement({
	selectElement: document.getElementById('content-type'),
	id: 'content-type',
	showAllValues: false,
	minLength: 2,
	displayMenu: 'overlay',
	defaultValue: '',
	placeholder: 'Any document type'
});

accessibleAutocomplete.enhanceSelectElement({
	selectElement: document.getElementById('topics'),
	id: 'topics',
	showAllValues: false,
	minLength: 2,
	displayMenu: 'overlay',
	defaultValue: '',
	placeholder: 'Any topic'
});
