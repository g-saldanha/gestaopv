declare namespace PCO {
    interface Campus {
        type: string;
        id: string;
        attributes: {
            avatar_url: string;
            church_center_enabled: boolean;
            city: string;
            contact_email_address: string;
            country: string;
            created_at: string;
            date_format: string;
            description: string;
            geolocation_set_manually: boolean;
            latitude: string;
            longitude: string;
            name: string;
            phone_number: string;
            state: string;
            street: string;
            time_zone: string;
            twenty_four_hour_time: string;
            updated_at: string;
            website: string;
            zip: string;
        };
        relationships: {
            organization: {
                data: {
                    type: string;
                    id: string;
                };
            };
        };
        links: {
            self: string;
        };
    }

    interface CampusResponse {
        links: any;
        data: Campus[];
        included: any;
        meta: any;
    }
}
