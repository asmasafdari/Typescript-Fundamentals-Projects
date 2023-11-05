"use strict";
function make_album(artist, title, no_of_songs) {
    const album = {
        artist,
        title,
        no_of_songs
    };
    if (no_of_songs !== undefined) {
        album.no_of_songs = no_of_songs;
    }
    return album;
}
const album1 = make_album("Drake", "Scorpio", 13);
const album2 = make_album("Young Stunners", "Tale of Two Talhas");
const album3 = make_album("Post Malone", "Stoney");
const album4 = make_album("Eminem", "Recovery", 17);
console.log(album1);
console.log(album2);
console.log(album3);
console.log(album4);
