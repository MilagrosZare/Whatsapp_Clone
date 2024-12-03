const extractFormData = (form_whatsapp) => {

    const form_data = new FormData(form_whatsapp)

    const form_keys = form_whatsapp.keys.toArray()

    const form_values = {}

    for (let key of form_keys) {

        form_values[key] = form_data.get(key)
    }
    return form_values
}

export default extractFormData