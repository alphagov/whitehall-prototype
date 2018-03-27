# GOV.UK Whitehall Prototype

https://whitehall-prototype.herokuapp.com

Built by the [GOV.UK Publishing Workflow team](https://gov-uk.atlassian.net/wiki/spaces/GOVUK/pages/266928151/Publishing+Workflow+Alpha) using the [GOV.UK Prototype Kit](https://govuk-prototype-kit.herokuapp.com/docs) and the [GOV.UK Design System private beta](https://govuk-design-system-production.cloudapps.digital/) – added in [PR#14](https://github.com/alphagov/whitehall-prototype/pull/14).

The prototype explores a new way of writing and editing content using concepts familiar to Whitehall users.

## Running the prototype locally

The prototype uses a private npm package for the design system. The GOV.UK Design System team can provide the npm login details. Heroku uses a token to retrieve this package, see 48da520.

```
npm install
npm start
```

## Screenshots

### Choosing a format

![Choose a format](docs/assets/images/screenshots/format-choice-view.png)

### Creating a news article

![Form for creating a news article](docs/assets/images/screenshots/new-news-article-view.png)

### News article view

![A news article in draft state](docs/assets/images/screenshots/document-view.png)

### Documents

![Documents filter](docs/assets/images/screenshots/documents-view.png)
