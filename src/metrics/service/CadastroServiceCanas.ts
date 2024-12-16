import { ValidateCadastroCanas } from '@/metrics/components/auth/canasvieiras/validationCanas';
import { transformCadastroCanas } from '@/metrics/components/auth/canasvieiras/transformCanas';

async function sendToPCO(form: ValidateCadastroCanas): Promise<boolean> {
    let toSend = transformCadastroCanas(form);
    const res = await fetch(`/api/canas/pco`, {
        method: 'POST',
        body: JSON.stringify(toSend)
    });
    return await res.json() as boolean;
}

export const CadastroServiceCanas = {
    async sendCadastro(form: ValidateCadastroCanas) {
        return await sendToPCO(form);
    }
};
