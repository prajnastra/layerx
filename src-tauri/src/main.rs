// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

use tauri::{CustomMenuItem, Menu, MenuItem, Submenu};

fn main() {
    let version = CustomMenuItem::new("version".to_string(), "Version");
    let submenu = Submenu::new(
        "About", 
        Menu::new().add_item(version)
    );
    let menu = Menu::new()
      .add_native_item(MenuItem::Copy)
      .add_item(CustomMenuItem::new("file", "File"))
      .add_submenu(submenu);

    
    tauri::Builder::default()
        .menu(menu)
        .invoke_handler(tauri::generate_handler![greet])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
