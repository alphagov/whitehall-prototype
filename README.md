# GOV.UK Whitehall Prototype

https://whitehall-prototype.herokuapp.com

Built by the [GOV.UK Publishing Workflow team](https://gov-uk.atlassian.net/wiki/spaces/GOVUK/pages/266928151/Publishing+Workflow+Alpha) using the [GOV.UK Prototype Kit](https://govuk-prototype-kit.herokuapp.com/docs) and the [GOV.UK Design System private beta](https://govuk-design-system-production.cloudapps.digital/) – added in [PR#14](https://github.com/alphagov/whitehall-prototype/pull/14).

The prototype explores a new way of writing and editing content using concepts familiar to Whitehall users.

The prototype was tested in [3 rounds of user research, documented in the prototype releases](https://github.com/alphagov/whitehall-prototype/releases).

## Running the prototype locally

The prototype uses a private npm package for the design system. The GOV.UK Design System team can provide the npm login details. Heroku uses a token to retrieve this package, see [48da520](https://github.com/alphagov/whitehall-prototype/commit/48da520).

```
npm install
npm start
```

## Screenshots

### Dashboard

![Dashboard](docs/assets/images/screenshots/dashboard.png)

### Choose an intent

![Choose an intent](docs/assets/images/screenshots/intent.png)

### Choosing format

![Choose a format](docs/assets/images/screenshots/format.png)

### Choose a document type

![Choose a document type](docs/assets/images/screenshots/document-type.png)

### Form to add a title, summary and body

![Form to add a title, summary and body](docs/assets/images/screenshots/title-summary-body.png)

### Document page

![Document page](docs/assets/images/screenshots/document-tasks.png)

### Add an attachment

![Add an attachment](docs/assets/images/screenshots/add-attachment.png)

### Add details about the content

![Form to gather information about the content](docs/assets/images/screenshots/about-content.png)

### Document history

![Document history](docs/assets/images/screenshots/document-history.png)
