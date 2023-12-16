/**
 * @author WMXPY
 * @description Tailwind
 */

import { SudosaurusIconTailwindDigestible } from "./tailwind/digestible";

export type SudosaurusIconTailwindProps = {

    readonly size: number;

    readonly className?: string;
    readonly itemClassName?: string;

    readonly foregroundColorClassName?: string;
    readonly backgroundColorClassName?: string;

    readonly digest?: boolean;

    readonly selectable?: boolean;

    readonly fontFamily?: string;
    readonly fontWeight?: number;
    readonly fontStyle?: "normal" | "italic" | "oblique" | "initial" | "inherit";

    readonly fullWidth?: boolean;
    readonly fullHeight?: boolean;
};

export const SudosaurusIconTailwind: React.FC<SudosaurusIconTailwindProps> = (
    props: SudosaurusIconTailwindProps,
) => {

    const foregroundColorClassName: string =
        props.foregroundColorClassName ?? "text-black dark:text-white";

    const backgroundColorClassName: string =
        props.backgroundColorClassName ?? "bg-white dark:bg-black";

    const classes: string[] = [
        "flex",
        "flex-col",
        "justify-center",
        "items-center",
        "relative",
        foregroundColorClassName,
        props.selectable ? "select-text" : "select-none",
    ];

    if (props.className) {
        classes.push(props.className);
    }

    return (<div
        className={classes.join(" ")}
        style={{
            width: props.fullWidth ? "100%" : props.size,
            height: props.fullHeight ? "100%" : props.size,
            fontFamily: props.fontFamily ?? "monospace",
            fontWeight: props.fontWeight ?? "bold",
            fontSize: `${Math.floor(props.size / 4)}px`,
            fontStyle: props.fontStyle ?? "normal",
            lineHeight: `${Math.floor(props.size / 4)}px`,
            gap: Math.floor(props.size / 24),
        }}
    >
        <div
            className="flex"
            style={{
                gap: Math.floor(props.size / 24),
            }}
        >
            <SudosaurusIconTailwindDigestible
                size={props.size}
                className={props.itemClassName}
                digestColorClassName={backgroundColorClassName}
                digest={props.digest}
            >
                S
            </SudosaurusIconTailwindDigestible>
            <SudosaurusIconTailwindDigestible
                size={props.size}
                className={props.itemClassName}
                digestColorClassName={backgroundColorClassName}
                digest={props.digest}
            >
                U
            </SudosaurusIconTailwindDigestible>
            <SudosaurusIconTailwindDigestible
                size={props.size}
                className={props.itemClassName}
                digestColorClassName={backgroundColorClassName}
                digest={props.digest}
            >
                D
            </SudosaurusIconTailwindDigestible>
            <SudosaurusIconTailwindDigestible
                size={props.size}
                className={props.itemClassName}
                digestColorClassName={backgroundColorClassName}
                digest={props.digest}
            >
                O
            </SudosaurusIconTailwindDigestible>
        </div>
        <div
            className="flex relative"
            style={{
                gap: Math.floor(props.size / 24),
            }}
        >
            <SudosaurusIconTailwindDigestible
                size={props.size}
                className={props.itemClassName}
                digestColorClassName={backgroundColorClassName}
                digest={props.digest}
            >
                S
            </SudosaurusIconTailwindDigestible>
            <SudosaurusIconTailwindDigestible
                size={props.size}
                className={props.itemClassName}
                digestColorClassName={backgroundColorClassName}
                digest={props.digest}
            >
                A
            </SudosaurusIconTailwindDigestible>
            <SudosaurusIconTailwindDigestible
                size={props.size}
                className={props.itemClassName}
                digestColorClassName={backgroundColorClassName}
                digest={props.digest}
            >
                U
            </SudosaurusIconTailwindDigestible>
            <SudosaurusIconTailwindDigestible
                size={props.size}
                className={props.itemClassName}
                digestColorClassName={backgroundColorClassName}
                digest={props.digest}
                dash
            >
                <div
                    className="relative"
                    style={{
                        bottom: props.size / 24,
                    }}
                >
                    _
                </div>
            </SudosaurusIconTailwindDigestible>
        </div>
        <div
            className="flex relative"
            style={{
                gap: Math.floor(props.size / 24),
            }}
        >
            <SudosaurusIconTailwindDigestible
                size={props.size}
                className={props.itemClassName}
                digestColorClassName={backgroundColorClassName}
                digest={props.digest}
            >
                R
            </SudosaurusIconTailwindDigestible>
            <SudosaurusIconTailwindDigestible
                size={props.size}
                className={props.itemClassName}
                digestColorClassName={backgroundColorClassName}
                digest={props.digest}
            >
                U
            </SudosaurusIconTailwindDigestible>
            <SudosaurusIconTailwindDigestible
                size={props.size}
                className={props.itemClassName}
                digestColorClassName={backgroundColorClassName}
                digest={props.digest}
            >
                S
            </SudosaurusIconTailwindDigestible>
            <SudosaurusIconTailwindDigestible
                size={props.size}
                className={props.itemClassName}
                digestColorClassName={backgroundColorClassName}
                digest={props.digest}
                dash
            >
                <div
                    className="relative"
                    style={{
                        bottom: Math.floor(props.size / 24),
                    }}
                >
                    _
                </div>
            </SudosaurusIconTailwindDigestible>
        </div>
    </div>);
};
