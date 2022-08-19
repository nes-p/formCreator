export const DateField =({label}:{label: string}) => {
    return (
        <fieldset>
        <label>
            {label}
        </label> 
        <input type="date"/>

    </fieldset>
    );
}