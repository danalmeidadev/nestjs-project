import { Module } from '@nestjs/common';
import { ConfigService } from './confg.service';

@Module({
    providers: [{
        provide: ConfigService,
        useValue: new ConfigService(),
    }],
    exports: [ConfigService],
})
export class ConfigModule {}
