#!/usr/bin/env python3
"""
Simple audio converter using pydub
Converts FLAC files to MP3 for better web browser compatibility
"""

import os
from pydub import AudioSegment

def convert_flac_to_mp3(input_file, output_file):
    """Convert FLAC file to MP3"""
    try:
        print(f"Converting {input_file} to {output_file}...")
        
        # Load FLAC file
        audio = AudioSegment.from_file(input_file, format="flac")
        
        # Export as MP3 with good quality
        audio.export(output_file, format="mp3", bitrate="192k")
        
        print(f"Successfully converted to {output_file}")
        return True
        
    except Exception as e:
        print(f"Error converting {input_file}: {e}")
        return False

def main():
    files_dir = "files"
    
    # Convert marcyme.flac to marcyme.mp3
    flac_files = [
        ("marcyme.flac", "marcyme.mp3"),
        ("Moon.flac", "Moon.mp3")
    ]
    
    for flac_file, mp3_file in flac_files:
        flac_path = os.path.join(files_dir, flac_file)
        mp3_path = os.path.join(files_dir, mp3_file)
        
        if os.path.exists(flac_path):
            if not os.path.exists(mp3_path):
                convert_flac_to_mp3(flac_path, mp3_path)
            else:
                print(f"{mp3_file} already exists, skipping...")
        else:
            print(f"Warning: {flac_path} not found")

if __name__ == "__main__":
    main()
