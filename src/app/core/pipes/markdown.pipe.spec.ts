import { TestBed } from '@angular/core/testing';
import { MarkdownPipe } from './markdown.pipe';

describe('MarkdownPipe', () => {
  let pipe: MarkdownPipe;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MarkdownPipe]
    });
    pipe = TestBed.inject(MarkdownPipe);
  });

  it('should return empty string for empty input', () => {
    const result = pipe.transform('');
    expect(result).toBe('');
  });

  it('should convert valid Markdown string', () => {
    const input = '# Hello World!';
    const result = pipe.transform(input);
    expect(result).toContain('<h1>Hello World!</h1>');
  });

});
