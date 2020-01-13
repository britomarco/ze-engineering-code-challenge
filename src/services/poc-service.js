import apolloFetch from './apollo-fetch'

const query = `query pocSearchMethod($now: DateTime!, $algorithm: String!, $lat: String!, $long: String!) {
    pocSearch(now: $now, algorithm: $algorithm, lat: $lat, long: $long) {
      id
      status
    }
  }`

const handleResponse = response => {
    if (response.errors)
        return Promise.reject(response.errors.join())

    return response.data.pocSearch;
}

const getPoc = (lat, lng) => {
    return apolloFetch({
        query, variables: {
            now: new Date(),
            algorithm: "NEAREST",
            lat: lat,
            long: lng
        }
    }).then(handleResponse)
}

export { getPoc };
