# Project Description

This project is a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. NLP is the ability of an application to understand the human language, written or oral.

## Getting started

In order to run this project just clone or download it, then do the following:

`cd` into your new folder and run:
- `npm install`

## Setting up the API

### Step 1: API KEY
Login to MeaningCloud API and get your api key

### Step 2: Environment Variables
- [ ] Create a new ```.env``` file in the root of your project
- [ ] Fill the .env file with your API key like this:
```
API_KEY=**************************
```


## Usability

### Run production environment

- `npm run build-prod`
- `npm run start`
- Open the following url in your web browser: http://localhost:8081

### Run development environment

- `npm run build-dev` "for development"
- Open the following url in your web browser: http://localhost:8080

### Run test case

- `npm run test`