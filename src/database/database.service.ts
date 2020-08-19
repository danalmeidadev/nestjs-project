import {TypeOrmModule} from '@nestjs/typeorm';
import { ConfigModule } from 'src/config/config.module';
import { ConfigService } from 'src/config/confg.service';
import { ConnectionOptions } from 'typeorm';
import { Configuration } from 'src/config/conf.keys';
export const databaseProviders = [
    TypeOrmModule.forRootAsync({
        imports: [ConfigModule],
        inject: [ConfigService],
        async useFactory(config: ConfigService) {
            return{
                ssl: true,
                type: config.get(Configuration.TYPE),
                host: config.get(Configuration.HOST),
                username: config.get(Configuration.USERNAME),
                password: config.get(Configuration.PASSWORD) 

            } as ConnectionOptions;
        }
    }),
]