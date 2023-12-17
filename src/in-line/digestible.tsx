/**
 * @author WMXPY
 * @namespace InLine
 * @description Digestible
 */

import * as React from "react";

export type SudosaurusIconInLineDigestibleProps = {

    readonly size: number;
    readonly color: string;

    readonly dash?: boolean;

    readonly digest?: boolean;

    readonly children?: React.ReactNode;
};

export const SudosaurusIconInLineDigestible: React.FC<SudosaurusIconInLineDigestibleProps> = (
    props: SudosaurusIconInLineDigestibleProps,
) => {

    if (props.digest) {

        return (<div
            style={{
                width: Math.ceil(props.size / 6),
                height: props.dash ?
                    Math.ceil(props.size / 24) :
                    Math.ceil(props.size / 4),
                alignSelf: "flex-end",
                backgroundColor: props.color,
                printColorAdjust: "exact",
                WebkitPrintColorAdjust: "exact",
            }}
        />);
    }

    return (<div
        style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: Math.ceil(props.size / 6),
            height: Math.ceil(props.size / 4),
        }}
    >
        {props.children}
    </div>);
};
