export default function playlist() {
  return {
    getTracks: (user, id, offset) => this.request(`${this.apiURL}/users/${user}/playlists/${id}/tracks?limit=100&offset=${offset}`),
  };
}
