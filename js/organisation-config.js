// Plaats dit bestand op een centrale locatie voor hergebruik in meerdere documenten.
var organisationConfig = {
  nl_organisationName: "MinBZK",
  nl_organisationStylesURL:
    "https://gitdocumentatie.logius.nl/publicatie/respec/style/",
  nl_organisationPublishURL: "https://regels.overheid.nl/publicatie/",
  logos: [{
    src: "https://gitdocumentatie.logius.nl/publicatie/respec/style/logos/figure-logius.svg",
    alt: "Logius",
    id: "Logius",
    height: 77,
    width: 44,
    url: "https://www.logius.nl/standaarden",
  }],

  addSectionLinks: true,
  postProcess: [window.respecMermaid.createFigures],

  localizationStrings: {
    en: {
      wv: "Draft",
      cv: "Recommendation",
      vv: "Proposed recommendation",
      def: "Definitive version",
      basis: "Document",
      eo: "Outdated version",
      tg: "Rescinded version",
      no: "Norm",
      st: "Standard",
      im: "Information model",
      pr: "Guideline",
      hr: "Guide",
      wa: "Proposed recommendation",
      al: "General",
      bd: "Governance documentation",
      bp: "Best practice",
    },
    nl: {
      wv: "Werkversie",
      cv: "Consultatieversie",
      vv: "Versie ter vaststelling",
      def: "Vastgestelde versie",
      basis: "Document",
      eo: "Verouderde versie",
      tg: "Teruggetrokken versie",
      no: "Norm",
      st: "Standaard",
      im: "Informatiemodel",
      pr: "Praktijkrichtlijn",
      hr: "Handreiking",
      wa: "Werkafspraak",
      al: "Algemeen",
      bd: "Beheerdocumentatie",
      bp: "Best practice",
    },
  },

  specTypeText: {
    en: {
      no: "Norm",
      st: "Standard",
      im: "Information model",
      pr: "Guideline",
      hr: "Guide",
      wa: "Proposed recommendation",
      al: "General",
      bd: "Governance documentation",
      bp: "Best practice",
    },
    nl: {
      no: "Norm",
      st: "Standaard",
      im: "Informatiemodel",
      pr: "Praktijkrichtlijn",
      hr: "Handreiking",
      wa: "Werkafspraak",
      al: "Algemeen",
      bd: "Beheerdocumentatie",
      bp: "Best practice",
    },
  },

  specStatusText: {
    en: {
      wv: "Draft",
      cv: "Recommendation",
      vv: "Proposed recommendation",
      def: "Definitive version",
      basis: "Document",
      eo: "Outdated version",
      tg: "Rescinded version",
    },
    nl: {
      wv: "Werkversie",
      cv: "Consultatieversie",
      vv: "Versie ter vaststelling",
      def: "Vastgestelde versie",
      basis: "Document",
      eo: "Verouderde versie",
      tg: "Teruggetrokken versie",
    },
  },

  sotdText: {
    nl: {
      sotd: "Status van dit document",
      def: `Dit is de definitieve versie van dit document. Wijzigingen naar aanleiding van consultaties zijn doorgevoerd.`,
      wv: `Dit is een werkversie die op elk moment kan worden gewijzigd, verwijderd of vervangen door andere documenten.`,
      cv: `Dit is een door het TO goedgekeurde consultatieversie. Commentaar over dit document kan gestuurd worden naar `,
      vv: `Dit is een definitief concept van de nieuwe versie van dit document. Wijzigingen naar aanleiding van consultaties zijn doorgevoerd.`,
      basis: "Dit is een document zonder officiële status.",
    },
    en: {
      sotd: "Status of This Document",
      def: `This is the definitive version of this document. Edits resulting from consultations have been applied.`,
      wv: `This is a draft that could be altered, removed or replaced by other documents.`,
      cv: `This is a proposed recommendation approved by TO. Comments regarding this document may be sent to `,
      vv: `This is the definitive concept of this document. Edits resulting from consultations have been applied.`,
      basis: "This document has no official standing.",
    },
  },

  labelColor: {
    def: "#154273",
    wv: "#32a852",
  },
  licenses: {
    cc0: {
      name: "Creative Commons 0 Public Domain Dedication",
      short: "CC0",
      url: "https://creativecommons.org/publicdomain/zero/1.0/",
      image:
        "https://tools.geostandaarden.nl/respec/style/logos/CC-Licentie.svg",
    },
    "cc-by": {
      name: "Creative Commons Attribution 4.0 International Public License",
      short: "CC-BY",
      url: "https://creativecommons.org/licenses/by/4.0/legalcode",
      image: "https://tools.geostandaarden.nl/respec/style/logos/cc-by.svg",
    },
    "cc-by-nd": {
      name: "Creative Commons Naamsvermelding-GeenAfgeleideWerken 4.0 Internationaal",
      short: "CC-BY-ND",
      url: "https://creativecommons.org/licenses/by-nd/4.0/legalcode.nl",
      image: "https://tools.geostandaarden.nl/respec/style/logos/cc-by-nd.svg",
    },
  },

  localBiblio: {
    "SemVer": {
      href: "https://semver.org",
      title: "Semantic Versioning 2.0.0",
      authors: ["T. Preston-Werner"],
      date: "June 2013"
    },
    "DONL": {
      href: "https://data.overheid.nl",
      title: "data.overheid.nl",
      authors: ["Kennis- en exploitatiecentrum voor Officiële Overheidspublicaties."],
      date: ""
    },
    "DATA_EU": {
      href: "https://data.europa.eu/en",
      title: "Semantic Versioning 2.0.0",
      authors: ["The Publications Office of the European Union."],
      date: ""
    },
    "DCATAP_21": {
      href: "https://joinup.ec.europa.eu/collection/semantic-interoperability-community-semic/solution/dcat-application-profile-data-portals-europe/release/210",
      title: "DCAT-AP 2.1",
      authors: ["The Publications Office of the European Union."],
      date: ""
    },
    "DCAT_20": {
      href: "https://www.w3.org/TR/vocab-dcat-2/",
      title: "Data Catalog Vocabulary (DCAT) - Version 2",
      authors: ["World Wide Web Consortium"],
      date: "February 2020"
    }
  },
}
