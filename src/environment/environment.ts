type IEnvironment = 'DEVELOPENT' | 'PRODUCTION';

const Environments: Record<IEnvironment, IEnvironment> = {
    DEVELOPENT: 'DEVELOPENT',
    PRODUCTION: 'PRODUCTION'
};

const Environment: IEnvironment = Environments.DEVELOPENT;

const ApiUrls: Record<IEnvironment, string> = {
    DEVELOPENT: 'http://localhost:3000',
    PRODUCTION: 'https://myapi.com'
}

export const ApiUrl = ApiUrls[Environment];