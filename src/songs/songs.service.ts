import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
  private readonly songs = [];

  create(song) {
    // save the data in a db
    this.songs.push(song);
    return this.songs;
  }

  findAll() {
    // fetch the data from the db
    return this.songs;
  }
}
