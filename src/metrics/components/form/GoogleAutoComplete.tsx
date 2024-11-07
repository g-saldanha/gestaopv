'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useMapsLibrary } from '@vis.gl/react-google-maps';
import { InputText } from 'primereact/inputtext';
import { ValidateCadastro } from '@/metrics/components/auth/validation';
import { ValidateCadastroKids } from '@/metrics/components/auth/validationKids';
import { ValidateCadastroConnect } from '@/metrics/components/auth/validationConnect';


interface PlaceAutocompleteProps {
    onPlaceSelect: (place: google.maps.places.PlaceResult | null) => void;
    cadastro: ValidateCadastro | ValidateCadastroKids | ValidateCadastroConnect;
}

// @ts-ignore
export default function GoogleAutoComplete({ onPlaceSelect, cadastro }: Readonly<PlaceAutocompleteProps>) {
    const [placeAutocomplete, setPlaceAutocomplete] =
        useState<google.maps.places.Autocomplete | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const places = useMapsLibrary('places');

    useEffect(() => {
        if (!places || !inputRef.current) return;

        const options = {
            fields: ['geometry', 'name', 'formatted_address', 'address_components']
        };

        setPlaceAutocomplete(new places.Autocomplete(inputRef.current, options));
    }, [places]);

    useEffect(() => {
        if (!placeAutocomplete) return;

        placeAutocomplete.addListener('place_changed', () => {
            onPlaceSelect(placeAutocomplete.getPlace());
        });
    }, [onPlaceSelect, placeAutocomplete]);

    return (
        <div className="autocomplete-container">
            <InputText id="address" type="address" className="w-full mb-3" required invalid={cadastro.errors?.address}
                       ref={inputRef} />
        </div>
    );
}
