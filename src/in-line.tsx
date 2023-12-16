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

    readonly fontFamily?: string;
    readonly fontWeight?: number;
    readonly fontStyle?: "normal" | "italic" | "oblique" | "initial" | "inherit";

    readonly fullWidth?: boolean;
    readonly fullHeight?: boolean;
};

export const SudosaurusIconInLine: React.FC<SudosaurusIconInLineProps> = (
    props: SudosaurusIconInLineProps,
) => {

    const color: string = props.color ?? "black";

    return (<div
        style={{
            position: "relative",
            userSelect: props.selectable ? "text" : "none",
            color,
            backgroundColor: props.backgroundColor,
            width: props.fullWidth ? "100%" : props.size,
            height: props.fullHeight ? "100%" : props.size,
            fontFamily: props.fontFamily ?? "monospace",
            fontWeight: props.fontWeight ?? "bold",
            fontSize: `${Math.floor(props.size / 4)}px`,
            fontStyle: props.fontStyle ?? "normal",
            lineHeight: `${Math.floor(props.size / 4)}px`,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: Math.floor(props.size / 24),
        }}
    >
        <div
            style={{
                display: "flex",
                gap: Math.floor(props.size / 24),
            }}
        >
            <SudosaurusIconInLineDigestible
                size={props.size}
                color={color}
                digest={props.digest}
            >
                S
            </SudosaurusIconInLineDigestible>
            <SudosaurusIconInLineDigestible
                size={props.size}
                color={color}
                digest={props.digest}
            >
                U
            </SudosaurusIconInLineDigestible>
            <SudosaurusIconInLineDigestible
                size={props.size}
                color={color}
                digest={props.digest}
            >
                D
            </SudosaurusIconInLineDigestible>
            <SudosaurusIconInLineDigestible
                size={props.size}
                color={color}
                digest={props.digest}
            >
                O
            </SudosaurusIconInLineDigestible>
        </div>
        <div
            style={{
                display: "flex",
                position: "relative",
                gap: Math.floor(props.size / 24),
            }}
        >
            <SudosaurusIconInLineDigestible
                size={props.size}
                color={color}
                digest={props.digest}
            >
                S
            </SudosaurusIconInLineDigestible>
            <SudosaurusIconInLineDigestible
                size={props.size}
                color={color}
                digest={props.digest}
            >
                A
            </SudosaurusIconInLineDigestible>
            <SudosaurusIconInLineDigestible
                size={props.size}
                color={color}
                digest={props.digest}
            >
                U
            </SudosaurusIconInLineDigestible>
            <SudosaurusIconInLineDigestible
                size={props.size}
                color={color}
                digest={props.digest}
                dash
            >
                <div
                    style={{
                        position: "relative",
                        bottom: Math.floor(props.size / 24),
                    }}
                >
                    _
                </div>
            </SudosaurusIconInLineDigestible>
        </div>
        <div
            style={{
                display: "flex",
                position: "relative",
                gap: Math.floor(props.size / 24),
            }}
        >
            <SudosaurusIconInLineDigestible
                size={props.size}
                color={color}
                digest={props.digest}
            >
                R
            </SudosaurusIconInLineDigestible>
            <SudosaurusIconInLineDigestible
                size={props.size}
                color={color}
                digest={props.digest}
            >
                U
            </SudosaurusIconInLineDigestible>
            <SudosaurusIconInLineDigestible
                size={props.size}
                color={color}
                digest={props.digest}
            >
                S
            </SudosaurusIconInLineDigestible>
            <SudosaurusIconInLineDigestible
                size={props.size}
                color={color}
                digest={props.digest}
                dash
            >
                <div
                    style={{
                        position: "relative",
                        bottom: Math.floor(props.size / 24),
                    }}
                >
                    _
                </div>
            </SudosaurusIconInLineDigestible>
        </div>
    </div>);
};
