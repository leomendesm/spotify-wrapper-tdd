export default function playlist() {
  return {
    getTracks: (user, id) => this.request(`${this.apiURL}/users/${user}/playlists/${id}/tracks`),
  };
}