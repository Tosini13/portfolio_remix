import React from "react";

export const useCopy = (value: string) => {
    const [copied, setCopied] = React.useState(false);
    
    const handleCopy = () =>{
        navigator.clipboard.writeText(value);
    }

    /**
     * @todo implement checking copied value
     */
    return {
        // copied, 
        handleCopy,
    }
}