export const NumberField =({label}:{label: string}) => {
    return (
        
        <fieldset>
        <label>
            {label}
        </label> 
        <input type="number"/>

    </fieldset>
    );
}