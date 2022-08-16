import React, {FC} from 'react';

export interface PanelProps {
    className?: string,    
    children?: React.ReactNode[] | React.ReactNode;
}

const Panel: FC<PanelProps> = ({
    children,
    className,    
}) => {

    return (
        <div className={className}>
            {children}
        </div>
    );
}
export default Panel;