export const config =
    [
        {
            label: 'Name',
            id: 'name',
            type: 'input',
            placeholder: 'Enter name',
            dataType: 'text',
            value: '',
            valid: false,
            errorMessage: 'Please Enter Your Name',
        },
        {
            label: 'Address',
            id: 'street',
            type: 'input',
            placeholder: 'Enter Address',
            dataType: 'textarea',
            value: '',
            valid: false,
            errorMessage: 'Please Enter Your Address',
        },
        {
            label: 'Country',
            id: 'country',
            type: 'select',
            placeholder: 'Enter country',
            dataType: 'text',
            options: [
                {
                    value: 'IN',
                    displayValue: 'India'
                },
                {
                    value: 'USA',
                    displayValue: 'America'
                },
                {
                    value: 'JAP',
                    displayValue: 'Japan'
                },

            ],
            value: '',
            validation: {
                required: true
            },
            valid: false,
            errorMessage: '',
        },
    ]
