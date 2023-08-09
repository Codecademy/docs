import sys

def generateDocsURL(file_path):
  path_parts = file_path.split("/")
  url = ""
  if "content" not in path_parts[0]:
    url = "https://github.com/Codecademy/docs/blob/main/"
  else:
    url = "https://www.codecademy.com/resources/docs/"
    for part in path_parts:
      if part == "concepts" or part == "content" or part == "terms" or part.endswith(".md"):
        path_parts.remove(part)
  path_parts = "/".join(path_parts)
  return url + path_parts

def getURLS(files):
  docs_urls = ""
  for file in files:
    url = generateDocsURL(file)
    docs_urls += generateDocsURL(file) + "\n"
  return docs_urls

def getFiles():
  return sys.argv[1].split(" ")

def getMarkdowns(files):
  return [file for file in files if ".md" in file]

def main():
  files = getFiles()
  files = getMarkdowns(files)
  urls = getURLS(files)
  sys.stdout.write(urls)
  sys.stdout.flush()

if __name__ == "__main__":
  main()