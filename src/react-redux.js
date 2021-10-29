import React, { useContext, useEffect, useState } from "react";
import MyContext from "./context";

export function connect(mapStateToProps, mapDispatchToProps) {
    return function (Component) {
        function Connect(props) {
            const context = useContext(MyContext);

            const [count, setCount] = useState(0);//强制代码更新

            useEffect(() => {
                context.store.subscribe(handleStoreChange);
            }, [context.store])

            const handleStoreChange = () => {
                setCount(count => count + 1)
            }

            return (
                <Component
                    {...props}
                    {...mapStateToProps(context.store.getState())}
                    {...mapDispatchToProps((context.store.dispatch))}
                />
            )
        }

        return Connect
    }
}