/**
 * @author WMXPY
 * @namespace Tailwind
 * @description Digestible
 */

import * as React from "react";

export type SudosaurusIconTailwindDigestibleProps = {

    readonly size: number;

    readonly digestColorClassName: string;

    readonly className?: string;

    readonly dash?: boolean;

    readonly digest?: boolean;

    readonly children?: React.ReactNode;
};

export const SudosaurusIconTailwindDigestible: React.FC<SudosaurusIconTailwindDigestibleProps> = (
    props: SudosaurusIconTailwindDigestibleProps,
) => {

    if (props.digest) {

        const classes: string[] = [
            "self-end",
            props.digestColorClassName,
        ];

        if (props.className) {
            classes.push(props.className);
        }

        return (<div
            className={classes.join(" ")}
            style={{
                width: props.size / 6,
                height: props.dash ?
                    props.size / 24 :
                    props.size / 4,
                printColorAdjust: "exact",
                WebkitPrintColorAdjust: "exact",
            }}
        />);
    }

    const classes: string[] = [
        "flex",
        "justify-center",
        "items-center",
    ];

    if (props.className) {
        classes.push(props.className);
    }

    return (<div
        className={classes.join(" ")}
        style={{
            width: props.size / 6,
            height: props.size / 4,
        }}
    >
        {props.children}
    </div>);
};
