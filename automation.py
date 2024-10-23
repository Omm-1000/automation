import os
import shutil

def organize_files(directory):
    try:
        os.chdir(directory)
    except FileNotFoundError:
        print("The specified directory does not exist.")
        return
    except PermissionError:
        print("You do not have permission to access this directory.")
        return

    if not os.path.exists("No Extension"):
        os.makedirs("No Extension")

    for filename in os.listdir():
        if os.path.isfile(filename) and not filename.startswith('.'):
            file_parts = filename.split('.')
            if len(file_parts) > 1:
                file_extension = file_parts[-1]
            else:
                file_extension = "No Extension"

            
            if file_extension != "No Extension" and not os.path.exists(file_extension):
                os.makedirs(file_extension)
            try:
                target_path = os.path.join(file_extension if file_extension != "No Extension" else "No Extension", filename)
                shutil.move(filename, target_path)
                print(f"Moved: {filename} -> {target_path}/")
            except Exception as e:
                print(f"Error moving {filename}: {e}")

if __name__ == "__main__":
    target_directory = input("Enter the path of the directory to organize: ")
    organize_files(target_directory)
    print("Files have been organized.")
