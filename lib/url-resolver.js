const { URL } = require('url');
const fs = require('fs');

/**
 * Simple resolver for URL-identifiers
 *
 * @example
 *
 *   const urlResolver = new UrlResolver();
 *   urlResolver.add('http://hl7.org/fhir/StructureMap/id3to4', 'file:///path/to/maps/id3to4');
 *   urlResolver.add('http://hl7.org/fhir/StructureMap/string3to4', 'file:///path/to/maps/string3to4');
 *
 *   const contents = urlResolver.resolve('http://hl7.org/fhir/StructureMap/*3to4');
 *    # => array of contents from the two files.
 */
class UrlResolver {
  constructor () {
    this.urlByIdentifier = {};
    this.contentsByIdentifier = {};
  }

  add (identifier, url) {
    this.urlByIdentifier[identifier] = new URL(url);
  }

  // find by identifier pattern
  // see: https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns
  // @returns array of content
  resolve (identifierPattern) {
    const re = new RegExp(identifierPattern);
    const identifiers = Object.keys(this.urlByIdentifier)
      .filter(k => k.match(re));

    return identifiers.map(identifier => {
      if (this.contentsByIdentifier[identifier]) {
        return this.contentsByIdentifier[identifier];
      } else {
        const url = this.urlByIdentifier[identifier];
        return this.contentsByIdentifier[identifier] = fs.readFileSync(url).toString();
      }
    });
  }
}

module.exports = UrlResolver;
