export const CheckBoxField =({label}:{label: string}) => {
    return (        
        <fieldset>
        <label>
            {label}
        </label> 
        <input type="checkbox"/>

    </fieldset>
    );
}