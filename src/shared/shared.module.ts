import { Module } from '@nestjs/common';
import { databaseProvider } from './providers/database.provider';

@Module({
    imports:[],
    providers:[databaseProvider],
    exports:[databaseProvider]
})
export class SharedModule {}
