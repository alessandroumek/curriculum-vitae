import { Pipe, PipeTransform } from '@angular/core';
import { marked } from 'marked';

@Pipe({
  name: 'markdown',
  standalone: true
})
export class MarkdownPipe implements PipeTransform {

  /**
   * Transforms a given string into its Markdown representation.
   *
   * If the given `value` is falsy or an empty string, it is returned as is.
   * Otherwise, the `marked` library is used to convert the string into
   * its Markdown representation.
   *
   * @param value the string to transform
   * @param args additional arguments (not used)
   * @returns the transformed string
   */
  transform(value: string, ...args: unknown[]): unknown {
    if (!value || value.length === 0) {
      return '';
    }

    return marked(value);
  }

}
