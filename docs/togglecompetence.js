<script>
    function toggleSection(id) {
        const section = document.getElementById(id);
        if (!section) return;
        section.style.display = section.style.display === 'none' ? 'block' : 'none';
    }
</script>
