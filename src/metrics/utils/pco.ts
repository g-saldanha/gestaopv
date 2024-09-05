const uname = 'eb409767f1b11abe27638f4b63f3b6febb658b64cfb852debd6e9405a5d71e89';
const pass = '3a1ab0e705d1898da39d8340df883b3ebc250b873d9f31ac0eaabc6f02150988';

export function getAuth() {
    return {
        auth: {
            username: uname,
            password: pass
        },
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
        }
    };
}


export const campusesResponse: PCO.CampusResponse = {
    'links': {
        'self': 'https://api.planningcenteronline.com/people/v2/campuses'
    },
    'data': [
        {
            'type': 'Campus',
            'id': '89632',
            'attributes': {
                'avatar_url': null,
                'church_center_enabled': true,
                'city': 'Florianópolis',
                'contact_email_address': null,
                'country': 'BR',
                'created_at': '2024-02-19T15:28:14Z',
                'date_format': null,
                'description': null,
                'geolocation_set_manually': false,
                'latitude': '-27.6004224',
                'longitude': '-48.5946945',
                'name': 'Palavra Viva Church',
                'phone_number': null,
                'state': 'Santa Catarina',
                'street': 'Av. Gov. Ivo Silveira, 2847',
                'time_zone': 'America/Los_Angeles',
                'twenty_four_hour_time': null,
                'updated_at': '2024-02-19T15:28:14Z',
                'website': null,
                'zip': '88085001'
            },
            'relationships': {
                'organization': {
                    'data': {
                        'type': 'Organization',
                        'id': '465565'
                    }
                }
            },
            'links': {
                'self': 'https://api.planningcenteronline.com/people/v2/campuses/89632'
            }
        },
        {
            'type': 'Campus',
            'id': '89633',
            'attributes': {
                'avatar_url': null,
                'church_center_enabled': true,
                'city': 'Florianópolis',
                'contact_email_address': null,
                'country': 'BR',
                'created_at': '2024-02-19T15:38:25Z',
                'date_format': null,
                'description': null,
                'geolocation_set_manually': false,
                'latitude': '-27.438334',
                'longitude': '-48.4089102',
                'name': 'Palavra Viva Ingleses',
                'phone_number': null,
                'state': 'Santa Catarina',
                'street': 'Rod. Armando Calil Bulos, 5280 - Ingleses do Rio Vermelho',
                'time_zone': 'America/Sao_Paulo',
                'twenty_four_hour_time': null,
                'updated_at': '2024-03-03T17:45:41Z',
                'website': null,
                'zip': '88058000'
            },
            'relationships': {
                'organization': {
                    'data': {
                        'type': 'Organization',
                        'id': '465565'
                    }
                }
            },
            'links': {
                'self': 'https://api.planningcenteronline.com/people/v2/campuses/89633'
            }
        },
        {
            'type': 'Campus',
            'id': '90518',
            'attributes': {
                'avatar_url': null,
                'church_center_enabled': true,
                'city': 'Delran',
                'contact_email_address': null,
                'country': 'US',
                'created_at': '2024-03-10T18:05:30Z',
                'date_format': null,
                'description': null,
                'geolocation_set_manually': false,
                'latitude': '40.0112568',
                'longitude': '-74.9610336',
                'name': 'Palavra Viva New Jersey',
                'phone_number': null,
                'state': 'New Jersey',
                'street': '4000 US-130',
                'time_zone': 'America/Sao_Paulo',
                'twenty_four_hour_time': null,
                'updated_at': '2024-03-10T18:05:30Z',
                'website': null,
                'zip': '08075'
            },
            'relationships': {
                'organization': {
                    'data': {
                        'type': 'Organization',
                        'id': '465565'
                    }
                }
            },
            'links': {
                'self': 'https://api.planningcenteronline.com/people/v2/campuses/90518'
            }
        },
        {
            'type': 'Campus',
            'id': '90519',
            'attributes': {
                'avatar_url': null,
                'church_center_enabled': true,
                'city': 'Palhoça',
                'contact_email_address': null,
                'country': 'BR',
                'created_at': '2024-03-10T18:07:34Z',
                'date_format': null,
                'description': null,
                'geolocation_set_manually': false,
                'latitude': '-27.6332951',
                'longitude': '-48.6608112',
                'name': 'Palavra Viva Palhoça',
                'phone_number': null,
                'state': 'Santa Catarina',
                'street': 'Avenida Papa Paulo VI, 646 - Ponte do Imaruim',
                'time_zone': 'America/Sao_Paulo',
                'twenty_four_hour_time': null,
                'updated_at': '2024-03-10T18:07:34Z',
                'website': null,
                'zip': '88130-780'
            },
            'relationships': {
                'organization': {
                    'data': {
                        'type': 'Organization',
                        'id': '465565'
                    }
                }
            },
            'links': {
                'self': 'https://api.planningcenteronline.com/people/v2/campuses/90519'
            }
        },
        {
            'type': 'Campus',
            'id': '92458',
            'attributes': {
                'avatar_url': null,
                'church_center_enabled': true,
                'city': 'Londres',
                'contact_email_address': null,
                'country': 'GB',
                'created_at': '2024-04-23T14:25:25Z',
                'date_format': null,
                'description': null,
                'geolocation_set_manually': false,
                'latitude': '51.4456409',
                'longitude': '-0.2054121',
                'name': 'Palavra Viva Londres',
                'phone_number': null,
                'state': 'England',
                'street': '225, Winbledon Park Road - Southfields',
                'time_zone': 'America/Sao_Paulo',
                'twenty_four_hour_time': null,
                'updated_at': '2024-05-23T22:27:22Z',
                'website': null,
                'zip': 'sw18 5rh'
            },
            'relationships': {
                'organization': {
                    'data': {
                        'type': 'Organization',
                        'id': '465565'
                    }
                }
            },
            'links': {
                'self': 'https://api.planningcenteronline.com/people/v2/campuses/92458'
            }
        },
        {
            'type': 'Campus',
            'id': '92737',
            'attributes': {
                'avatar_url': null,
                'church_center_enabled': true,
                'city': 'Paulo Lopes',
                'contact_email_address': null,
                'country': 'BR',
                'created_at': '2024-04-30T02:04:17Z',
                'date_format': null,
                'description': null,
                'geolocation_set_manually': false,
                'latitude': '-27.9708179',
                'longitude': '-48.6813715',
                'name': 'Palavra Viva Paulo Lopes',
                'phone_number': null,
                'state': 'SC',
                'street': 'R. Ana Raupp de Sá, 52',
                'time_zone': 'America/Sao_Paulo',
                'twenty_four_hour_time': null,
                'updated_at': '2024-04-30T02:04:17Z',
                'website': null,
                'zip': '88490-000'
            },
            'relationships': {
                'organization': {
                    'data': {
                        'type': 'Organization',
                        'id': '465565'
                    }
                }
            },
            'links': {
                'self': 'https://api.planningcenteronline.com/people/v2/campuses/92737'
            }
        },
        {
            'type': 'Campus',
            'id': '92738',
            'attributes': {
                'avatar_url': null,
                'church_center_enabled': true,
                'city': 'São José',
                'contact_email_address': null,
                'country': 'BR',
                'created_at': '2024-04-30T02:06:35Z',
                'date_format': null,
                'description': null,
                'geolocation_set_manually': false,
                'latitude': '-27.5389684',
                'longitude': '-48.6247313',
                'name': 'Palavra Viva São José',
                'phone_number': null,
                'state': 'SC',
                'street': 'R. Hipólito Henrique Pfleger, 4767 - Serraria',
                'time_zone': 'America/Sao_Paulo',
                'twenty_four_hour_time': null,
                'updated_at': '2024-04-30T02:06:35Z',
                'website': null,
                'zip': '88161-068'
            },
            'relationships': {
                'organization': {
                    'data': {
                        'type': 'Organization',
                        'id': '465565'
                    }
                }
            },
            'links': {
                'self': 'https://api.planningcenteronline.com/people/v2/campuses/92738'
            }
        },
        {
            'type': 'Campus',
            'id': '93159',
            'attributes': {
                'avatar_url': null,
                'church_center_enabled': true,
                'city': 'Rio de Janeiro ',
                'contact_email_address': null,
                'country': 'BR',
                'created_at': '2024-05-10T14:49:34Z',
                'date_format': null,
                'description': null,
                'geolocation_set_manually': false,
                'latitude': '-22.9654337',
                'longitude': '-43.3901224',
                'name': 'Palavra Viva Rio de Janeiro',
                'phone_number': null,
                'state': 'RJ',
                'street': 'Estr. Cel. Pedro Corrêa, 99 - Jacarepaguá',
                'time_zone': 'America/Sao_Paulo',
                'twenty_four_hour_time': null,
                'updated_at': '2024-05-10T14:49:34Z',
                'website': null,
                'zip': '22775-090'
            },
            'relationships': {
                'organization': {
                    'data': {
                        'type': 'Organization',
                        'id': '465565'
                    }
                }
            },
            'links': {
                'self': 'https://api.planningcenteronline.com/people/v2/campuses/93159'
            }
        },
        {
            'type': 'Campus',
            'id': '93809',
            'attributes': {
                'avatar_url': null,
                'church_center_enabled': true,
                'city': 'Florianópolis',
                'contact_email_address': null,
                'country': 'BR',
                'created_at': '2024-05-23T14:04:31Z',
                'date_format': null,
                'description': null,
                'geolocation_set_manually': false,
                'latitude': '-27.4724377',
                'longitude': '-48.4108642',
                'name': 'Palavra Viva Rio Vermelho',
                'phone_number': null,
                'state': 'Santa Catarina',
                'street': 'Rua Cândido Pereira dos Anjos, 300 - São João do Rio Vermelho',
                'time_zone': 'America/Sao_Paulo',
                'twenty_four_hour_time': null,
                'updated_at': '2024-05-23T14:04:31Z',
                'website': null,
                'zip': '88060300'
            },
            'relationships': {
                'organization': {
                    'data': {
                        'type': 'Organization',
                        'id': '465565'
                    }
                }
            },
            'links': {
                'self': 'https://api.planningcenteronline.com/people/v2/campuses/93809'
            }
        },
        {
            'type': 'Campus',
            'id': '94246',
            'attributes': {
                'avatar_url': null,
                'church_center_enabled': true,
                'city': 'Milano',
                'contact_email_address': null,
                'country': 'IT',
                'created_at': '2024-06-04T17:22:40Z',
                'date_format': null,
                'description': null,
                'geolocation_set_manually': false,
                'latitude': '45.5006305',
                'longitude': '9.1233246',
                'name': 'Palavra Viva Milano',
                'phone_number': null,
                'state': 'MI',
                'street': 'Via Gallarate, 200',
                'time_zone': 'America/Sao_Paulo',
                'twenty_four_hour_time': null,
                'updated_at': '2024-06-04T17:22:40Z',
                'website': null,
                'zip': '20151'
            },
            'relationships': {
                'organization': {
                    'data': {
                        'type': 'Organization',
                        'id': '465565'
                    }
                }
            },
            'links': {
                'self': 'https://api.planningcenteronline.com/people/v2/campuses/94246'
            }
        },
        {
            'type': 'Campus',
            'id': '94247',
            'attributes': {
                'avatar_url': null,
                'church_center_enabled': true,
                'city': 'Contrada dei Cacciatori',
                'contact_email_address': null,
                'country': 'IT',
                'created_at': '2024-06-04T17:24:06Z',
                'date_format': null,
                'description': null,
                'geolocation_set_manually': false,
                'latitude': '41.4451756',
                'longitude': '12.9731447',
                'name': 'Palavra Viva Latina',
                'phone_number': null,
                'state': 'LT',
                'street': 'Via dei Monti Lepini, 51',
                'time_zone': 'America/Sao_Paulo',
                'twenty_four_hour_time': null,
                'updated_at': '2024-06-04T17:24:06Z',
                'website': null,
                'zip': '04100  '
            },
            'relationships': {
                'organization': {
                    'data': {
                        'type': 'Organization',
                        'id': '465565'
                    }
                }
            },
            'links': {
                'self': 'https://api.planningcenteronline.com/people/v2/campuses/94247'
            }
        },
        {
            'type': 'Campus',
            'id': '94539',
            'attributes': {
                'avatar_url': null,
                'church_center_enabled': true,
                'city': 'Florianópolis',
                'contact_email_address': null,
                'country': 'BR',
                'created_at': '2024-06-11T12:29:16Z',
                'date_format': null,
                'description': null,
                'geolocation_set_manually': false,
                'latitude': '-27.5918984',
                'longitude': '-48.5524734',
                'name': 'Palavra Viva Centro de Florianópolis',
                'phone_number': null,
                'state': 'Santa Catarina',
                'street': 'Av. Rio Branco, 590 - Centro',
                'time_zone': 'America/Sao_Paulo',
                'twenty_four_hour_time': null,
                'updated_at': '2024-06-18T14:58:30Z',
                'website': null,
                'zip': '88015-110'
            },
            'relationships': {
                'organization': {
                    'data': {
                        'type': 'Organization',
                        'id': '465565'
                    }
                }
            },
            'links': {
                'self': 'https://api.planningcenteronline.com/people/v2/campuses/94539'
            }
        },
        {
            'type': 'Campus',
            'id': '95391',
            'attributes': {
                'avatar_url': null,
                'church_center_enabled': true,
                'city': 'Santo Amaro da Imperatriz',
                'contact_email_address': null,
                'country': 'BR',
                'created_at': '2024-07-03T02:09:34Z',
                'date_format': null,
                'description': null,
                'geolocation_set_manually': false,
                'latitude': '-27.6805735',
                'longitude': '-48.7782236',
                'name': 'Palavra Viva Santo Amaro',
                'phone_number': null,
                'state': 'Santa Catarina',
                'street': 'R. Osvaldo Momm, 12 - Centro',
                'time_zone': 'America/Sao_Paulo',
                'twenty_four_hour_time': null,
                'updated_at': '2024-07-03T02:09:34Z',
                'website': null,
                'zip': '88140-000'
            },
            'relationships': {
                'organization': {
                    'data': {
                        'type': 'Organization',
                        'id': '465565'
                    }
                }
            },
            'links': {
                'self': 'https://api.planningcenteronline.com/people/v2/campuses/95391'
            }
        },
        {
            'type': 'Campus',
            'id': '95404',
            'attributes': {
                'avatar_url': null,
                'church_center_enabled': true,
                'city': 'Ituporanga ',
                'contact_email_address': null,
                'country': 'BR',
                'created_at': '2024-07-03T13:25:40Z',
                'date_format': null,
                'description': null,
                'geolocation_set_manually': false,
                'latitude': '-27.4236401',
                'longitude': '-49.6001285',
                'name': 'Palavra Viva Ituporanga',
                'phone_number': null,
                'state': 'Santa Catarina',
                'street': 'R. Ten. Jacobe Filipi, 283 - Centro',
                'time_zone': 'America/Sao_Paulo',
                'twenty_four_hour_time': null,
                'updated_at': '2024-07-03T13:25:40Z',
                'website': null,
                'zip': '88400-000'
            },
            'relationships': {
                'organization': {
                    'data': {
                        'type': 'Organization',
                        'id': '465565'
                    }
                }
            },
            'links': {
                'self': 'https://api.planningcenteronline.com/people/v2/campuses/95404'
            }
        },
        {
            'type': 'Campus',
            'id': '96179',
            'attributes': {
                'avatar_url': null,
                'church_center_enabled': true,
                'city': 'São José',
                'contact_email_address': null,
                'country': 'BR',
                'created_at': '2024-07-23T00:43:13Z',
                'date_format': null,
                'description': null,
                'geolocation_set_manually': false,
                'latitude': '-27.5753621',
                'longitude': '-48.6615837',
                'name': 'Palavra Viva Forquilhas',
                'phone_number': null,
                'state': 'Santa Catarina',
                'street': 'Av. Ceniro Luiz Ribeiro Martins, 316-418 - Ceniro',
                'time_zone': 'America/Sao_Paulo',
                'twenty_four_hour_time': null,
                'updated_at': '2024-07-23T00:43:13Z',
                'website': null,
                'zip': '88107479'
            },
            'relationships': {
                'organization': {
                    'data': {
                        'type': 'Organization',
                        'id': '465565'
                    }
                }
            },
            'links': {
                'self': 'https://api.planningcenteronline.com/people/v2/campuses/96179'
            }
        },
        {
            'type': 'Campus',
            'id': '96180',
            'attributes': {
                'avatar_url': null,
                'church_center_enabled': true,
                'city': 'Florianópolis',
                'contact_email_address': null,
                'country': 'BR',
                'created_at': '2024-07-23T00:56:27Z',
                'date_format': null,
                'description': null,
                'geolocation_set_manually': false,
                'latitude': '-27.7063769',
                'longitude': '-48.5045722',
                'name': 'Palavra Viva Morro das Pedras',
                'phone_number': null,
                'state': 'Santa Catarina',
                'street': 'R. Francisco Viêira, 300 - Morro das Pedras',
                'time_zone': 'America/Sao_Paulo',
                'twenty_four_hour_time': null,
                'updated_at': '2024-07-23T00:56:27Z',
                'website': null,
                'zip': '88066010'
            },
            'relationships': {
                'organization': {
                    'data': {
                        'type': 'Organization',
                        'id': '465565'
                    }
                }
            },
            'links': {
                'self': 'https://api.planningcenteronline.com/people/v2/campuses/96180'
            }
        },
        {
            'type': 'Campus',
            'id': '96183',
            'attributes': {
                'avatar_url': null,
                'church_center_enabled': true,
                'city': 'Antônio Carlos',
                'contact_email_address': null,
                'country': 'BR',
                'created_at': '2024-07-23T01:26:52Z',
                'date_format': null,
                'description': null,
                'geolocation_set_manually': false,
                'latitude': '-27.5146265',
                'longitude': '-48.7596135',
                'name': 'Palavra Viva Antônio Carlos',
                'phone_number': null,
                'state': 'Santa Catarina',
                'street': 'Maria Garcia Coelho 60 - Centro',
                'time_zone': 'America/Sao_Paulo',
                'twenty_four_hour_time': null,
                'updated_at': '2024-07-23T01:26:52Z',
                'website': null,
                'zip': '88180000'
            },
            'relationships': {
                'organization': {
                    'data': {
                        'type': 'Organization',
                        'id': '465565'
                    }
                }
            },
            'links': {
                'self': 'https://api.planningcenteronline.com/people/v2/campuses/96183'
            }
        },
        {
            'type': 'Campus',
            'id': '96385',
            'attributes': {
                'avatar_url': null,
                'church_center_enabled': true,
                'city': 'Florianópolis',
                'contact_email_address': null,
                'country': 'BR',
                'created_at': '2024-07-28T04:14:51Z',
                'date_format': null,
                'description': null,
                'geolocation_set_manually': false,
                'latitude': '-27.4494498',
                'longitude': '-48.4573679',
                'name': 'Palavra Viva Canasvieiras',
                'phone_number': null,
                'state': 'SC',
                'street': 'Rod. José Carlos Daux, 18070 - Vargem de Fora',
                'time_zone': 'America/Sao_Paulo',
                'twenty_four_hour_time': null,
                'updated_at': '2024-07-28T04:14:51Z',
                'website': null,
                'zip': '88050-401'
            },
            'relationships': {
                'organization': {
                    'data': {
                        'type': 'Organization',
                        'id': '465565'
                    }
                }
            },
            'links': {
                'self': 'https://api.planningcenteronline.com/people/v2/campuses/96385'
            }
        },
        {
            'type': 'Campus',
            'id': '96507',
            'attributes': {
                'avatar_url': null,
                'church_center_enabled': true,
                'city': 'Pres. Prudente',
                'contact_email_address': null,
                'country': 'BR',
                'created_at': '2024-07-31T01:46:13Z',
                'date_format': null,
                'description': null,
                'geolocation_set_manually': false,
                'latitude': '-22.143115',
                'longitude': '-51.3942956',
                'name': 'Palavra Viva Pres. Prudente',
                'phone_number': null,
                'state': 'São Paulo',
                'street': 'Av. Brasil, 2870 - Vila Industrial',
                'time_zone': 'America/Sao_Paulo',
                'twenty_four_hour_time': null,
                'updated_at': '2024-07-31T01:46:13Z',
                'website': null,
                'zip': '19013-002'
            },
            'relationships': {
                'organization': {
                    'data': {
                        'type': 'Organization',
                        'id': '465565'
                    }
                }
            },
            'links': {
                'self': 'https://api.planningcenteronline.com/people/v2/campuses/96507'
            }
        },
        {
            'type': 'Campus',
            'id': '96726',
            'attributes': {
                'avatar_url': null,
                'church_center_enabled': true,
                'city': 'Imbituba',
                'contact_email_address': null,
                'country': 'BR',
                'created_at': '2024-08-04T02:45:19Z',
                'date_format': null,
                'description': null,
                'geolocation_set_manually': false,
                'latitude': '-28.2389103',
                'longitude': '-48.6603834',
                'name': 'Palavra Viva Imbituba',
                'phone_number': null,
                'state': 'Santa Catarina',
                'street': 'Av. Álvaro Catão, 9 - Centro',
                'time_zone': 'America/Sao_Paulo',
                'twenty_four_hour_time': null,
                'updated_at': '2024-08-04T02:45:19Z',
                'website': null,
                'zip': '88780000'
            },
            'relationships': {
                'organization': {
                    'data': {
                        'type': 'Organization',
                        'id': '465565'
                    }
                }
            },
            'links': {
                'self': 'https://api.planningcenteronline.com/people/v2/campuses/96726'
            }
        },
        {
            'type': 'Campus',
            'id': '97745',
            'attributes': {
                'avatar_url': null,
                'church_center_enabled': true,
                'city': 'Urubici',
                'contact_email_address': null,
                'country': 'BR',
                'created_at': '2024-08-31T00:43:36Z',
                'date_format': null,
                'description': null,
                'geolocation_set_manually': false,
                'latitude': '-28.001085',
                'longitude': '-49.5874287',
                'name': 'Palavra Viva Urubici',
                'phone_number': null,
                'state': 'Santa Catarina',
                'street': 'Av. Adolfo Konder, 1115 - Traçado',
                'time_zone': 'America/Sao_Paulo',
                'twenty_four_hour_time': null,
                'updated_at': '2024-08-31T00:43:36Z',
                'website': null,
                'zip': '88650000'
            },
            'relationships': {
                'organization': {
                    'data': {
                        'type': 'Organization',
                        'id': '465565'
                    }
                }
            },
            'links': {
                'self': 'https://api.planningcenteronline.com/people/v2/campuses/97745'
            }
        },
        {
            'type': 'Campus',
            'id': '97746',
            'attributes': {
                'avatar_url': null,
                'church_center_enabled': true,
                'city': 'Vidira',
                'contact_email_address': null,
                'country': 'BR',
                'created_at': '2024-08-31T00:54:10Z',
                'date_format': null,
                'description': null,
                'geolocation_set_manually': false,
                'latitude': '-27.0061915',
                'longitude': '-51.1493262',
                'name': 'Palavra Viva Videira',
                'phone_number': null,
                'state': 'Santa Catarina',
                'street': 'Rua Saul Brandalise, 480 - Centro',
                'time_zone': 'America/Sao_Paulo',
                'twenty_four_hour_time': null,
                'updated_at': '2024-08-31T00:54:10Z',
                'website': null,
                'zip': '89560170'
            },
            'relationships': {
                'organization': {
                    'data': {
                        'type': 'Organization',
                        'id': '465565'
                    }
                }
            },
            'links': {
                'self': 'https://api.planningcenteronline.com/people/v2/campuses/97746'
            }
        },
        {
            'type': 'Campus',
            'id': '97747',
            'attributes': {
                'avatar_url': null,
                'church_center_enabled': true,
                'city': 'Garopaba ',
                'contact_email_address': null,
                'country': 'BR',
                'created_at': '2024-08-31T01:11:04Z',
                'date_format': null,
                'description': null,
                'geolocation_set_manually': false,
                'latitude': '-28.0501883',
                'longitude': '-48.643156',
                'name': 'Palavra Viva Garopaba',
                'phone_number': null,
                'state': 'Santa Catarina',
                'street': 'SC-434',
                'time_zone': 'America/Sao_Paulo',
                'twenty_four_hour_time': null,
                'updated_at': '2024-08-31T01:11:04Z',
                'website': null,
                'zip': '88495-000'
            },
            'relationships': {
                'organization': {
                    'data': {
                        'type': 'Organization',
                        'id': '465565'
                    }
                }
            },
            'links': {
                'self': 'https://api.planningcenteronline.com/people/v2/campuses/97747'
            }
        },
        {
            'type': 'Campus',
            'id': '97804',
            'attributes': {
                'avatar_url': null,
                'church_center_enabled': true,
                'city': 'Danbury',
                'contact_email_address': null,
                'country': 'US',
                'created_at': '2024-09-03T04:23:53Z',
                'date_format': null,
                'description': null,
                'geolocation_set_manually': false,
                'latitude': '41.3979626',
                'longitude': '-73.4557965',
                'name': 'Palavra Viva Danbury',
                'phone_number': null,
                'state': 'Connecticut',
                'street': '337 Main St',
                'time_zone': 'America/Sao_Paulo',
                'twenty_four_hour_time': null,
                'updated_at': '2024-09-03T04:23:53Z',
                'website': null,
                'zip': '06810'
            },
            'relationships': {
                'organization': {
                    'data': {
                        'type': 'Organization',
                        'id': '465565'
                    }
                }
            },
            'links': {
                'self': 'https://api.planningcenteronline.com/people/v2/campuses/97804'
            }
        },
        {
            'type': 'Campus',
            'id': '97805',
            'attributes': {
                'avatar_url': null,
                'church_center_enabled': true,
                'city': 'Quinta do Anjo',
                'contact_email_address': null,
                'country': 'PT',
                'created_at': '2024-09-03T04:31:24Z',
                'date_format': null,
                'description': null,
                'geolocation_set_manually': false,
                'latitude': '38.5672551',
                'longitude': '-8.9408587',
                'name': 'Palavra Viva Setúbal',
                'phone_number': null,
                'state': 'Palmela/Setúbal',
                'street': '106 Rua Venâncio da Costa Lima',
                'time_zone': 'America/Sao_Paulo',
                'twenty_four_hour_time': null,
                'updated_at': '2024-09-03T04:31:24Z',
                'website': null,
                'zip': '2950-701'
            },
            'relationships': {
                'organization': {
                    'data': {
                        'type': 'Organization',
                        'id': '465565'
                    }
                }
            },
            'links': {
                'self': 'https://api.planningcenteronline.com/people/v2/campuses/97805'
            }
        }
    ],
    'included': [],
    'meta': {
        'total_count': 25,
        'count': 25,
        'can_order_by': [
            'name',
            'created_at',
            'updated_at'
        ],
        'can_query_by': [
            'created_at',
            'updated_at',
            'id'
        ],
        'can_include': [
            'lists',
            'service_times'
        ],
        'parent': {
            'id': '465565',
            'type': 'Organization'
        }
    }
};
