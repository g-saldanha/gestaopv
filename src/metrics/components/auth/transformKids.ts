import { ValidateCadastroKids } from '@/metrics/components/auth/validationKids';


export function transformCadastroKids(cadastro: ValidateCadastroKids) {
    const payload: any = {
        person: undefined
    };
    payload.phone = cadastro.form?.whatsapp;
    payload.household = cadastro.form?.household;
    payload.person = {
        data: {
            type: 'Person',
            attributes: {
                first_name: cadastro.form?.firstName?.trim(),
                last_name: cadastro.form?.lastName?.trim(),
                birthdate: cadastro.form?.birthDate?.toISOString(),
                child: false,
                gender: '',
                membership: 'Visitante',
                primary_campus_id: '89632'
            }
        }
    };


    // /people/v2/people/{id}/phone_numbers
    payload.whatsapp = {
        data: {
            type: 'PhoneNumber',
            attributes: {
                number: cadastro.form?.whatsapp,
                primary: true,
                location: 'Mobile'
            }
        }
    };
    // /people/v2/people/{id}/addresses
    payload.address = {
        data: {
            type: 'Address',
            attributes: {
                city: cadastro.form?.address?.address_components?.find((cc) => cc.types.includes('administrative_area_level_2'))?.long_name,
                state: cadastro.form?.address?.address_components?.find((cc) => cc.types.includes('administrative_area_level_1'))?.long_name,
                zip: cadastro.form?.address?.address_components?.find((cc) => cc.types.includes('postal_code'))?.long_name,
                country_code: cadastro.form?.address?.address_components?.find((cc) => cc.types.includes('country'))?.short_name,
                location: 'Home',
                primary: true,
                street_line_1: cadastro.form?.address?.formatted_address,
                street_line_2: ''
            }
        }
    };

    if (cadastro.form?.email) {
        // /people/v2/people/{id}/emails
        payload.email = {
            data: {
                type: 'Email',
                attributes: {
                    address: cadastro.form.email,
                    primary: true,
                    location: 'Home'
                }
            }
        };
    }

    payload.children = cadastro.form?.children.map((child) => ({
        data: {
            id: child.id,
            type: 'Person',
            attributes: {
                child: true,
                last_name: cadastro.form?.lastName?.trim(),
                gender: '',
                birthdate: child.birthDate.toISOString(),
                first_name: child.firstName,
                membership: 'Visitante',
                primary_campus_id: '89632'
            }
        }
    }));


    return payload;

}
