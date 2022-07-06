const FormBuilder = ({formData}) => {

    const renderFormData = (item) => {
        switch (item?.type) {
            case 'input':
                return <><label htmlFor='name'>{item?.label}</label><input required={item?.validation?.required}
                                                                            type={item?.type} id={item?.id}
                                                                            placeholder={item?.placeholder}
                                                                            value={item?.value} onChange={(e) => {
                    console.log(e.target.value)
                }}/></>
            case 'select':
                return <select name={item?.label} id={item?.id} required={item?.validation?.required}
                               placeholder={item?.placeholder}>
                    {item?.options?.map((option) => (
                        <option key={`option_${option?.value}`} value={option?.displayValue}>{option?.value}</option>
                    ))}
                </select>
            default:
                break;
        }
    }

    return (
        <form>
            {formData?.map((item, index) => (
                <div key={`item.id_${index}`}>
                    {renderFormData(item)}
                </div>
            ))}
        </form>
    )
}

export default FormBuilder;
