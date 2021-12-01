import { useState } from "react";
import styles from './Colapse.module.css';
const Collapse = ({ children }) => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    return (
        <>
            <button
                className="collapse-button"
                onClick={() => setIsCollapsed(!isCollapsed)}
            >
                {isCollapsed ? 'Show' : 'Hide'} content
            </button>
            <div
                className={`collapse-content ${isCollapsed ? 'collapsed' : 'expanded'}`}
                aria-expanded={isCollapsed}
            >
                {children}
            </div>
        </>
    );
};
export default Collapse;