import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song-dto';

@Controller('songs')
export class SongsController {

  constructor(private songsService: SongsService){

  }

  @Post()
  create(@Body() CreateSongDTO: CreateSongDTO){
    return this.songsService.create(CreateSongDTO)
  }

  @Get()
  findAll() {
    return this.songsService.findAll();
  }

  @Get(':id')
  findOne() {
    return 'fetch song from chsdgei sdhgihcjksd ';
  }
  
  @Put(':id')
  update() {
    return 'update the song based on the id ';
  }

  @Delete(':id')
  deletes() {
    return 'delete the song based on the id';
  }
}
