import { ValidateCadastroConnect } from '@/metrics/components/auth/validationConnect';

export function transformCadastroConnects(cadastro: ValidateCadastroConnect) {
    const payload: any = {
        person: undefined
    };

    payload.volunteer = cadastro.form?.question_one;
    payload.connect = cadastro.form?.question_three;
    payload.wasVolunteer = cadastro.form?.question_two;
    payload.maritalStatus = cadastro.form?.married;

    if (cadastro.form?.id) {
        payload.personId = cadastro.form?.id.trim();
    }

    payload.person = {
        data: {
            type: 'Person',
            attributes: {
                first_name: cadastro.form?.firstName?.trim(),
                last_name: cadastro.form?.lastName?.trim(),
                birthdate: cadastro.form?.birthDate?.toISOString(),
                child: false,
                gender: cadastro.form?.gender == 'Masculino' ? 'Male' : 'Female',
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

    return payload;
}
