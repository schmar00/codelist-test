let ENDPOINT = 'https://resource.geolba.ac.at/PoolParty/sparql/hazardType';

function addVocProj(vocProjects) {

    vocProjects.set('hazardType', {
        acronym: 'HazardType',
        title: 'Specific Hazard Types',
        description: 'A generic classification of types of natural hazards',
        image: 'geoconnect3d.png',
        project_page: 'https://registry.inspire.gv.at/codelist/SpecificHazardTypeValue/naturalDisaster',
        rdf_download: ['', '']
    });

    /*    vocProjects.set('keywords', {
            acronym: 'GIP-P keywords',
            title: 'Compilation of a keyword thesaurus',
            description: 'GIP-P WP4 introduces Linked Data technology to GeoERA projects is to enable a Semantic Text Search. Search for data is the basic task for all data infrastructures. It needs to put all keywords used to tag datasets into a single hierarchy like a thesaurus. Data queries then can use this kind of a word net also to get search results for similar keywords within a semantic radius. For metadata descriptions, the clarification of the meaning of textual attributes applies mainly to keywords and the implementation of a semantic search within a metadata catalog. Here WP4 strives for a compilation (SKOS thesaurus) of keywords with URIs suitable for tagging metadata (-> use case: Multilingual Semantic Text Search).',
            image: 'falte.png',
            project_page: 'http://geoera.eu/gip-p/',
            rdf_download: 'http://resource.geolba.ac.at/structure/export/keywords.rdf'
        });  */
}
