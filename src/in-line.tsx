/**
 * @author WMXPY
 * @description In Line
 */

import { SudosaurusIconInLineDigestible } from "./in-line/digestible";

export type SudosaurusIconInLineProps = {

    readonly size: number;

    readonly digest?: boolean;

    readonly selectable?: boolean;

    readonly color?: string;
    readonly backgroundColor?: string;

    readonly fontWeight?: number;

    readonly fullWidth?: boolean;
    readonly fullHeight?: boolean;

    readonly fontFamily?: string;
};

export const SudosaurusIconInLine: React.FC<SudosaurusIconInLineProps> = (
    props: SudosaurusIconInLineProps,
) => {

    return (<div
        style={{
            position: "relative",
            userSelect: props.selectable ? "text" : "none",
            color: props.color,
            backgroundColor: props.backgroundColor,
            width: props.fullWidth ? "100%" : props.size,
            height: props.fullHeight ? "100%" : props.size,
            fontWeight: props.fontWeight,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            fontSize: props.size / 4,
            fontFamily: props.fontFamily ?? "monospace",
        }}
    >
        <div
            style={{
                display: "flex",
                gap: props.size / 20,
            }}
        >
            <SudosaurusIconInLineDigestible
                size={props.size}
                color={props.color ?? "black"}
                digest={props.digest}
            >
                S
            </SudosaurusIconInLineDigestible>
            <SudosaurusIconInLineDigestible
                size={props.size}
                color={props.color ?? "black"}
                digest={props.digest}
            >
                U
            </SudosaurusIconInLineDigestible>
            <SudosaurusIconInLineDigestible
                size={props.size}
                color={props.color ?? "black"}
                digest={props.digest}
            >
                D
            </SudosaurusIconInLineDigestible>
            <SudosaurusIconInLineDigestible
                size={props.size}
                color={props.color ?? "black"}
                digest={props.digest}
            >
                O
            </SudosaurusIconInLineDigestible>
        </div>
        <div
            style={{
                display: "flex",
                position: "relative",
                gap: props.size / 20,
            }}
        >
            <SudosaurusIconInLineDigestible
                size={props.size}
                color={props.color ?? "black"}
                digest={props.digest}
            >
                S
            </SudosaurusIconInLineDigestible>
            <SudosaurusIconInLineDigestible
                size={props.size}
                color={props.color ?? "black"}
                digest={props.digest}
            >
                A
            </SudosaurusIconInLineDigestible>
            <SudosaurusIconInLineDigestible
                size={props.size}
                color={props.color ?? "black"}
                digest={props.digest}
            >
                U
            </SudosaurusIconInLineDigestible>
            <div
                style={{
                    position: "relative",
                    bottom: props.size / 32,
                }}
            >_</div>
        </div>
        <div
            style={{
                display: "flex",
                position: "relative",
                gap: props.size / 20,
            }}
        >
            <SudosaurusIconInLineDigestible
                size={props.size}
                color={props.color ?? "black"}
                digest={props.digest}
            >
                R
            </SudosaurusIconInLineDigestible>
            <SudosaurusIconInLineDigestible
                size={props.size}
                color={props.color ?? "black"}
                digest={props.digest}
            >
                U
            </SudosaurusIconInLineDigestible>
            <SudosaurusIconInLineDigestible
                size={props.size}
                color={props.color ?? "black"}
                digest={props.digest}
            >
                S
            </SudosaurusIconInLineDigestible>
            <div
                style={{
                    position: "relative",
                    bottom: props.size / 32,
                }}
            >_</div>
        </div>
    </div>);
};
