declare namespace Metrics {
    interface Record {
        'id': number;
        'created_at': string;
        'updated_at': string,
        'week_reference': number;
        'service_date_time': string;
        'service_timezone': string;
        'value': number;
        'replaces': null,
        'category': Category,
        'campus': Campus,
        'event': null
    }

    interface Category {
        'id': number;
        'name': string;
        'format': string;
        'created_at': string;
        'updated_at': string;
    }

    interface Campus {
        'id': number;
        'slug': string;
        'description': string;
        'region_id': null,
        'timezone': string;
        'active': true,
        'created_at': string;
        'updated_at': string;
    }
}
