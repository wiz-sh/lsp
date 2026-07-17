import type { BindingResult, CheckResult, SourceFile } from "@wiz-sh/compiler";
import type { LintDiagnostic } from "@wiz-sh/linter";

export interface DocumentSnapshot {
    uri: string;
    fileName: string;
    version: number;
    text: string;
    file: SourceFile;
    binding: BindingResult;
    check: CheckResult;
    lint: readonly LintDiagnostic[];
}
