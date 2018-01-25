import { AthenaClient, AthenaClientConfig } from './lib/client';
export interface AwsConfig {
    region: string;
    accessKeyId?: string;
    secretAccessKey?: string;
}
export * from './lib/client';
export declare function createClient(clientConfig: AthenaClientConfig, awsConfig: AwsConfig): AthenaClient;
export declare function createClientLambda(clientConfig: AthenaClientConfig, s3: any, athena: any): AthenaClient;
