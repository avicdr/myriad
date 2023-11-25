import React, { useEffect, useState } from "react";
// && scrollerClientHeight <= totalHeight
const around = (totalHeight: number, scrollerClientHeight: number): boolean => {
    return scrollerClientHeight >= totalHeight - 20;
};

type Props = {
    id?: string;
    totalCount: number;
    pageSize: number;
    pageEventHandler: any;
};
const Paginator = (props: Props) => {
    const id = props.id || "wrapper";
    const [pageChange, setPageChange] = useState(0);

    useEffect(() => {
        const elementNode = document.getElementById(id);
        if (elementNode) {
            elementNode.addEventListener("scroll", () => {
                const isScrollTouchingBottom = around(
                    parseInt(String(elementNode.scrollHeight)),
                    parseInt(String(elementNode.scrollTop)) + parseInt(String(elementNode.clientHeight))
                    );
                    if (isScrollTouchingBottom && parseInt(String(elementNode.scrollTop))) {
                    setPageChange(Math.random());
                }
            });
        }
        return () => {
            if (elementNode) {
                elementNode.removeEventListener("scroll", () => null);
            }
        };
    }, []);

    useEffect(() => {
        const elementNode = document.getElementById(id);
        if (elementNode) {
            const isScrollTouchingBottom = around(
                parseInt(String(elementNode.scrollHeight)),
                parseInt(String(elementNode.scrollTop)) + parseInt(String(elementNode.clientHeight))
            );
            if (isScrollTouchingBottom && props.totalCount) {
                if (props.totalCount >= (props.pageSize)) {
                    props.pageEventHandler && props.pageEventHandler(true);
                } else {
                    props.pageEventHandler && props.pageEventHandler(false);
                }
            }
        }
    }, [pageChange]);

    return <div></div>;
};

export default Paginator;
